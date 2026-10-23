/*
 * Parser and analyzer of the regular expressions that describe the segments of a mask (see maskedInput.js).
 *
 * The parser accepts the part of the syntax of the regular expressions of JavaScript (in the unicode mode) that describes the text that a
 * segment can have:
 *  - characters, and their escapes: \n \r \t \v \f \0 \xHH \uHHHH \u{H...}, and \ before any syntax character;
 *  - the classes \d \D \w \W \s \S, the unicode properties \p{...} and \P{...}, and the dot;
 *  - the sets [...] and [^...], with ranges and the escapes above;
 *  - groups (...) and (?:...), and the alternation |;
 *  - the quantifiers * + ? {n} {n,} {n,m}, and the lazy forms of them.
 *
 * It does not accept (an error is thrown), because they do not describe the text of a segment:
 *  - the anchors ^ and $, because the pattern is always matched against the whole text of the segment;
 *  - the word boundaries \b and \B;
 *  - the back-references \1 ... \9 and \k<name>;
 *  - the lookaheads (?=...) and (?!...), and the lookbehinds (?<=...) and (?<!...);
 *  - the named groups (?<name>...), and the modifiers (?i:...);
 *  - the control escapes \cX;
 *  - the flags, which are not part of the source of a regular expression (a regular expression object given for a segment keeps only its
 *    flag 'i', ignore case).
 *
 * The result is a tree of nodes:
 *   { type: 'class', source, kind, ... }    one character: kind 'literal' (char), 'dot', 'escape' (letter), 'property' or 'set' (negated, items)
 *   { type: 'seq', items }                   the nodes one after the other
 *   { type: 'alt', options }                 one of the nodes
 *   { type: 'repeat', node, min, max }       the node repeated; max can be Infinity
 */

const SYNTAX_CHARS = '^$\\.*+?()[]{}|/';

//returns the source for a regular expression that matches the character
const escapeChar = (char) => SYNTAX_CHARS.includes(char) ? '\\' + char : char;

//the characters of the escapes of one character
const CONTROL_ESCAPES = { n: '\n', r: '\r', t: '\t', v: '\v', f: '\f' };

/**
 * Parses the source of a regular expression.
 *
 * @param {string} source the source of the regular expression.
 *
 * @return {Object} the tree of the nodes.
 *
 * @throws {SyntaxError} if the source is not valid, or it uses what is not supported.
 */
export const parseRegExp = (source) => {
    let index = 0;

    const fail = (message) => {
        throw new SyntaxError(`${message} (at position ${index})`);
    };

    //reads a number of the quantifiers
    const readNumber = () => {
        const match = /^\d+/.exec(source.slice(index));
        if (!match) {
            return null;
        }
        index += match[0].length;
        return +match[0];
    };

    //reads the hexadecimal digits of an escape
    const readHex = (count) => {
        const text = source.slice(index, index + count);
        if (text.length !== count || !/^[0-9a-fA-F]+$/.test(text)) {
            fail('Invalid escape');
        }
        index += count;
        return parseInt(text, 16);
    };

    //reads the braces of an unicode property escape or of a unicode escape; returns the text between the braces
    const readBraces = () => {
        const end = source.indexOf('}', index);
        if (source[index] !== '{' || end < 0) {
            fail('Invalid escape');
        }
        const text = source.slice(index + 1, end);
        index = end + 1;
        return text;
    };

    //reads the escape after a backslash, at the position of the character after the backslash; `inSet` is true inside [...].
    //Returns { char } for an escape of one character, or { escape } or { property, negated } for a class.
    const readEscape = (inSet) => {
        const letter = source[index];
        if (letter === undefined) {
            fail('The pattern ends with a backslash');
        }
        index++;
        if ('dDwWsS'.includes(letter)) {
            return { escape: letter };
        }
        if (letter === 'p' || letter === 'P') {
            const property = readBraces();
            try {
                new RegExp(`\\${letter}{${property}}`, 'u');
            }
            catch (error) {
                fail(`Invalid unicode property: ${property}`);
            }
            return { property, negated: letter === 'P' };
        }
        if (letter === 'b' || letter === 'B') {
            fail('Word boundaries (\\b, \\B) are not supported');
        }
        if (letter === 'k' || (letter >= '1' && letter <= '9')) {
            fail('Back-references are not supported');
        }
        if (letter === 'c') {
            fail('Control escapes (\\cX) are not supported');
        }
        if (letter === '0') {
            if (/\d/.test(source[index] ?? '')) {
                fail('Invalid escape');
            }
            return { char: '\0' };
        }
        if (letter in CONTROL_ESCAPES) {
            return { char: CONTROL_ESCAPES[letter] };
        }
        if (letter === 'x') {
            return { char: String.fromCodePoint(readHex(2)) };
        }
        if (letter === 'u') {
            if (source[index] === '{') {
                const text = readBraces();
                if (!/^[0-9a-fA-F]+$/.test(text) || parseInt(text, 16) > 0x10FFFF) {
                    fail('Invalid escape');
                }
                return { char: String.fromCodePoint(parseInt(text, 16)) };
            }
            return { char: String.fromCodePoint(readHex(4)) };
        }
        if (SYNTAX_CHARS.includes(letter) || (inSet && letter === '-')) {
            return { char: letter };
        }
        index--;
        fail('Invalid escape');
    };

    //parses a set [...], at the position of the opening bracket
    const parseSet = () => {
        const begin = index;
        index++;
        const negated = source[index] === '^';
        if (negated) {
            index++;
        }

        //reads one element of a set: { char } or a class
        const readElement = () => {
            if (source[index] === '\\') {
                index++;
                return readEscape(true);
            }
            const char = String.fromCodePoint(source.codePointAt(index));
            index += char.length;
            return { char };
        };

        const items = [];
        while (index < source.length && source[index] !== ']') {
            const first = readElement();
            if (source[index] === '-' && source[index + 1] !== ']' && index + 1 < source.length) {
                index++;
                const last = readElement();
                if (first.char === undefined || last.char === undefined) {
                    fail('Invalid range in a set');
                }
                if (first.char.codePointAt(0) > last.char.codePointAt(0)) {
                    fail('The range of a set is out of order');
                }
                items.push({ from: first.char.codePointAt(0), to: last.char.codePointAt(0) });
            }
            else if (first.char !== undefined) {
                items.push({ from: first.char.codePointAt(0), to: first.char.codePointAt(0) });
            }
            else {
                items.push(first);
            }
        }
        if (index >= source.length) {
            fail('Unclosed set');
        }
        index++;
        if (items.length === 0) {
            fail('An empty set matches nothing');
        }
        return { type: 'class', source: source.slice(begin, index), kind: 'set', negated, items };
    };

    //parses an atom: a character or class, a group, or a set
    const parseAtom = () => {
        const char = source[index];
        switch (char) {
            case '^':
            case '$':
                fail('The anchors (^, $) are not supported: the pattern always matches the whole text of the segment');
                break;
            case '(': {
                index++;
                if (source[index] === '?') {
                    const next = source[index + 1];
                    if (next === ':') {
                        index += 2;
                    }
                    else if (next === '=' || next === '!') {
                        fail('Lookaheads are not supported');
                    }
                    else if (next === '<' && (source[index + 2] === '=' || source[index + 2] === '!')) {
                        fail('Lookbehinds are not supported');
                    }
                    else if (next === '<') {
                        fail('Named groups are not supported');
                    }
                    else {
                        fail('Modifiers and other group types are not supported');
                    }
                }
                const node = parseAlternation();
                if (source[index] !== ')') {
                    fail('Unclosed group');
                }
                index++;
                return node;
            }
            case '[':
                return parseSet();
            case '.':
                index++;
                return { type: 'class', source: '.', kind: 'dot' };
            case '\\': {
                const begin = index;
                index++;
                const escape = readEscape(false);
                const text = source.slice(begin, index);
                if (escape.char !== undefined) {
                    return { type: 'class', source: text, kind: 'literal', char: escape.char };
                }
                if (escape.escape !== undefined) {
                    return { type: 'class', source: text, kind: 'escape', escape: escape.escape };
                }
                return { type: 'class', source: text, kind: 'property', property: escape.property, negated: escape.negated };
            }
            case '*':
            case '+':
            case '?':
                fail('Nothing to repeat');
                break;
            case '{':
            case '}':
            case ']':
                fail(`Unexpected ${char}`);
                break;
        }
        const literal = String.fromCodePoint(source.codePointAt(index));
        index += literal.length;
        return { type: 'class', source: escapeChar(literal), kind: 'literal', char: literal };
    };

    //parses the quantifier after an atom; returns { min, max } or null
    const parseQuantifier = () => {
        const char = source[index];
        let quantifier = null;
        if (char === '*') {
            index++;
            quantifier = { min: 0, max: Infinity };
        }
        else if (char === '+') {
            index++;
            quantifier = { min: 1, max: Infinity };
        }
        else if (char === '?') {
            index++;
            quantifier = { min: 0, max: 1 };
        }
        else if (char === '{') {
            index++;
            const min = readNumber();
            if (min === null) {
                fail('Invalid quantifier');
            }
            let max = min;
            if (source[index] === ',') {
                index++;
                max = readNumber() ?? Infinity;
            }
            if (source[index] !== '}') {
                fail('Invalid quantifier');
            }
            index++;
            if (max < min) {
                fail('The quantifier is out of order');
            }
            quantifier = { min, max };
        }
        if (quantifier && source[index] === '?') {
            index++;        //a lazy quantifier matches the same texts
        }
        return quantifier;
    };

    const parseSequence = () => {
        const items = [];
        while (index < source.length && source[index] !== '|' && source[index] !== ')') {
            const atom = parseAtom();
            const quantifier = parseQuantifier();
            items.push(quantifier ? { type: 'repeat', node: atom, ...quantifier } : atom);
        }
        return items.length === 1 ? items[0] : { type: 'seq', items };
    };

    const parseAlternation = () => {
        const options = [parseSequence()];
        while (source[index] === '|') {
            index++;
            options.push(parseSequence());
        }
        return options.length === 1 ? options[0] : { type: 'alt', options };
    };

    const root = parseAlternation();
    if (index < source.length) {
        fail('Unmatched )');
    }
    return root;
};

/**
 * Returns the shortest and the longest length of the texts that the node matches, in characters (unicode code points).
 *
 * @param {Object} node the tree of nodes.
 *
 * @return {{min: number, max: number}} the lengths; the maximum can be Infinity.
 */
export const getLengths = (node) => {
    switch (node.type) {
        case 'class':
            return { min: 1, max: 1 };
        case 'seq':
            return node.items.reduce((total, item) => {
                const lengths = getLengths(item);
                return { min: total.min + lengths.min, max: total.max + lengths.max };
            }, { min: 0, max: 0 });
        case 'alt': {
            const all = node.options.map(getLengths);
            return { min: Math.min(...all.map(lengths => lengths.min)), max: Math.max(...all.map(lengths => lengths.max)) };
        }
        case 'repeat': {
            const lengths = getLengths(node.node);
            return { min: lengths.min * node.min, max: lengths.max === 0 ? 0 : lengths.max * node.max };
        }
    }
};

/**
 * Returns, for each character of the texts that a node of a fixed length matches, the list of the classes that it can be: a character of a
 * text is only valid if it is matched by one of the classes of its position. (A text can have a valid character in each position and not
 * match the node as a whole: with alternatives such as (0[1-9]|1[0-2]).)
 *
 * @param {Object} node the tree of nodes, whose texts have all the same length.
 *
 * @return {Object[][]} the lists of classes of the positions.
 */
export const getPositions = (node) => {
    switch (node.type) {
        case 'class':
            return [[node]];
        case 'seq':
            return node.items.flatMap(getPositions);
        case 'alt': {
            const all = node.options.map(getPositions);
            return all[0].map((_, position) => all.flatMap(positions => positions[position]));
        }
        case 'repeat': {
            const positions = getPositions(node.node);
            return Array.from({ length: node.min }, () => positions).flat();
        }
    }
};

const regExps = new Map();      //the regular expressions of the classes

//returns true if the character is matched by the class node
export const classMatches = (node, char, ignoreCase = false) => {
    const key = (ignoreCase ? 'i:' : 'c:') + node.source;
    let regExp = regExps.get(key);
    if (!regExp) {
        regExp = new RegExp(`^(?:${node.source})$`, ignoreCase ? 'ui' : 'u');
        regExps.set(key, regExp);
    }
    return regExp.test(char);
};

//returns true if all the characters of the class node are decimal digits
export const isDigitClass = (node) => {
    if (node.kind === 'literal') {
        return node.char >= '0' && node.char <= '9';
    }
    if (node.kind === 'escape') {
        return node.escape === 'd';
    }
    return node.kind === 'set' && !node.negated && node.items.every(item => item.escape === 'd' || (item.from >= 48 && item.to <= 57));
};

//returns true if all the characters of the class node are decimal digits, or the signs + and -
export const isSignOrDigitClass = (node) => {
    if (node.kind === 'literal') {
        return (node.char >= '0' && node.char <= '9') || node.char === '+' || node.char === '-';
    }
    if (node.kind === 'escape') {
        return node.escape === 'd';
    }
    return node.kind === 'set' && !node.negated &&
        node.items.every(item => item.escape === 'd' || (item.from >= 48 && item.to <= 57) || (item.from === item.to && (item.from === 43 || item.from === 45)));
};
