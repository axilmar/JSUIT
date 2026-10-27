import { initInput } from "./input.js";
import { MaskError } from "./MaskError.js";
import { parseRegExp, getLengths, getPositions, classMatches, isDigitClass, isSignOrDigitClass } from "./regExpUtil.js";
import { attachTextOverlay, registerFormSubmitter } from "./segmentedInputUtil.js";

const nativeValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');

//the characters of a label are single characters of the text of the input
const ASTRAL = /[\uD800-\uDFFF]/;

//creates the segment of an entry of the mask: a text segment (not editable) or an editable segment
const createSegment = (entry, index) => {
    if (entry === null || typeof entry !== 'object') {
        throw new MaskError(`Invalid entry at index ${index}: an entry must be an object with a label.`);
    }
    const { label, pattern, min, max, step } = entry;
    if (typeof label !== 'string') {
        throw new MaskError(`Missing label at index ${index}: the label must be a string (it can be empty or have spaces, but not null or undefined).`);
    }
    if (ASTRAL.test(label)) {
        throw new MaskError(`Invalid label at index ${index}; label = '${label}': the characters outside of the basic multilingual plane are not supported.`);
    }

    //a segment without a pattern is a text segment: it shows its label, and it cannot be edited
    if (pattern === undefined || pattern === null) {
        return { editable: false, label, length: label.length };
    }

    let source;
    let ignoreCase = false;
    if (pattern instanceof RegExp) {
        source = pattern.source;
        ignoreCase = pattern.flags.includes('i');
    }
    else if (typeof pattern === 'string') {
        source = pattern;
    }
    else {
        throw new MaskError(`Invalid pattern at index ${index}: the pattern must be a regular expression or a string.`);
    }

    let tree;
    try {
        tree = parseRegExp(source);
    }
    catch (error) {
        throw new MaskError(`Invalid pattern at index ${index}; pattern = '${source}': ${error.message}`, { cause: error });
    }
    const lengths = getLengths(tree);
    if (lengths.min !== lengths.max || lengths.min !== label.length) {
        const detail = lengths.min !== lengths.max ? 'the pattern matches texts of different lengths' : `the pattern matches texts of ${lengths.min} characters`;
        throw new MaskError(`Label/pattern length mismatch at index ${index}; label = '${label}', pattern = '${source}' (${detail}).`);
    }
    if (label.length === 0) {
        throw new MaskError(`Invalid entry at index ${index}: a segment with a pattern must have a label that is not empty.`);
    }
    let regExp;
    try {
        regExp = new RegExp(`^(?:${source})$`, ignoreCase ? 'ui' : 'u');
    }
    catch (error) {
        throw new MaskError(`Invalid pattern at index ${index}; pattern = '${source}': ${error.message}`, { cause: error });
    }

    //what the user can type in each position, and if the segment has numbers
    const positions = getPositions(tree);
    const digitOnly = positions.every(position => position.every(isDigitClass));
    const signed = !digitOnly && positions.length >= 2 && positions[0].every(isSignOrDigitClass) && positions.slice(1).every(position => position.every(isDigitClass));
    const numeric = digitOnly || signed;
    for (const [name, value] of [['min', min], ['max', max], ['step', step]]) {
        if (value !== undefined && value !== null && (typeof value !== 'number' || !Number.isFinite(value))) {
            throw new MaskError(`Invalid ${name} at index ${index}: it must be a number.`);
        }
    }
    if (step !== undefined && step !== null && step <= 0) {
        throw new MaskError(`Invalid step at index ${index}: it must be greater than 0.`);
    }

    return {
        editable: true,
        label,
        length: label.length,
        chars: Array.from(label),
        source,
        ignoreCase,
        regExp,
        positions,
        digitOnly,
        numeric,
        align: digitOnly ? 'right' : 'left',        //the numbers are typed from the right, as in a calculator; the other texts from the left
        min: numeric ? min ?? undefined : undefined,
        max: numeric ? max ?? undefined : undefined,
        step: numeric ? step ?? undefined : undefined,
        buffer: []                                  //the characters that the user typed
    };
};

//creates the segments of a mask
const createSegments = (mask) => {
    if (!Array.isArray(mask)) {
        throw new MaskError('The mask must be an array of entries.');
    }
    return mask.map(createSegment);
};

//the position in the segment of the first character that the user typed: the characters of a number are at the right, the others at the left
const getOffset = (segment) => segment.align === 'right' ? segment.length - segment.buffer.length : 0;

//true if the segment has all the characters that it needs; the number can have less characters than the length of the segment, as its left is zeroes
const isComplete = (segment) => segment.digitOnly ? segment.buffer.length >= 1 : segment.buffer.length === segment.length;

//the characters that the segment shows: the typed characters, and the characters of the label for the others
const getShownChars = (segment) => {
    const offset = getOffset(segment);
    return segment.chars.map((labelChar, position) => {
        const typed = position - offset;
        return typed >= 0 && typed < segment.buffer.length ? segment.buffer[typed] : labelChar;
    });
};

//the text of the segment for the value: the numbers have the zeroes at their left
const getValueText = (segment) => {
    const text = segment.buffer.join('');
    return segment.digitOnly ? text.padStart(segment.length, '0') : text;
};

//the number of a numeric segment
const getNumber = (segment) => parseInt(getValueText(segment), 10);

//returns what is wrong with the typed characters of a segment: { chars: the positions of the characters that are not valid, whole: true if the
//text is not valid as a whole, message }
const analyze = (segment) => {
    const result = { chars: new Set(), whole: false, message: '' };
    const offset = getOffset(segment);
    segment.buffer.forEach((char, typed) => {
        const position = offset + typed;
        if (!segment.positions[position].some(node => classMatches(node, char, segment.ignoreCase))) {
            result.chars.add(position);
        }
    });
    if (result.chars.size > 0) {
        result.message = 'Please enter a valid value.';
        return result;
    }
    if (!isComplete(segment)) {
        return result;
    }
    const text = getValueText(segment);
    if (!segment.regExp.test(text)) {
        result.whole = true;
        result.message = 'Please enter a valid value.';
    }
    else if (segment.numeric) {
        const number = getNumber(segment);
        if (segment.min !== undefined && number < segment.min) {
            result.whole = true;
            result.message = `Value must be ${segment.min} or greater.`;
        }
        else if (segment.max !== undefined && number > segment.max) {
            result.whole = true;
            result.message = `Value must be ${segment.max} or less.`;
        }
        else if (segment.step !== undefined) {
            const ratio = (number - (segment.min ?? 0)) / segment.step;
            if (Math.abs(ratio - Math.round(ratio)) > 1e-9) {
                result.whole = true;
                result.message = `Value must be a multiple of ${segment.step}${segment.min ? ` from ${segment.min}` : ''}.`;
            }
        }
    }
    return result;
};

//returns the characters of the text that a numeric segment shows for a number, or null if the number does not fit in the segment
const formatNumber = (segment, number) => {
    const digits = String(Math.abs(number));
    if (segment.digitOnly) {
        return number >= 0 && digits.length <= segment.length && segment.regExp.test(digits.padStart(segment.length, '0')) ? Array.from(digits) : null;
    }
    const candidates = [(number < 0 ? '-' : '+') + digits.padStart(segment.length - 1, '0'), (number < 0 ? '-' : '') + digits.padStart(segment.length - (number < 0 ? 1 : 0), '0')];
    const text = candidates.find(candidate => candidate.length === segment.length && segment.regExp.test(candidate));
    return text === undefined ? null : Array.from(text);
};

//turns the element into a masked input; `state` holds the mask
const attachMask = (element, state) => {
    let segments = [];
    let hasEditable = false;
    const textSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set ?? nativeValue.set;
    const textGetter = Object.getOwnPropertyDescriptor(element, 'value')?.get ?? nativeValue.get;
    const overlay = attachTextOverlay(element);
    let mouseDown = false;
    let lastValue = '';

    //the positions, in the text of the input, where the segments start
    const getStarts = () => {
        const starts = [];
        let position = 0;
        for (const segment of segments) {
            starts.push(position);
            position += segment.length;
        }
        return starts;
    };

    //returns the index of the editable segment of a position of the text, or -1 if the position is in a text segment; a position between two
    //segments belongs to the one that ends there
    const findSegment = (position) => {
        const starts = getStarts();
        let candidate = -1;
        for (let index = 0; index < segments.length; index++) {
            const segment = segments[index];
            if (!segment.editable) {
                continue;
            }
            if (position > starts[index] && position <= starts[index] + segment.length) {
                return index;
            }
            if (position === starts[index] && candidate < 0) {
                candidate = index;
            }
        }
        return candidate;
    };

    const findNextEditable = (index) => segments.findIndex((segment, other) => other > index && segment.editable);

    const findPreviousEditable = (index) => segments.findLastIndex((segment, other) => other < index && segment.editable);

    //the position of the caret that follows what the user typed in a segment: at the right of a number, after the last character of a text
    const getNaturalCaret = (index) => {
        const segment = segments[index];
        return getStarts()[index] + (segment.align === 'right' ? segment.length : segment.buffer.length);
    };

    //moves a position in a text segment to the nearest position of an editable segment
    const snap = (position) => {
        if (findSegment(position) >= 0) {
            return position;
        }
        const starts = getStarts();
        let before = -1;
        let after = -1;
        segments.forEach((segment, index) => {
            if (!segment.editable) {
                return;
            }
            const start = starts[index];
            const end = start + segment.length;
            if (end <= position) {
                before = end;
            }
            if (start >= position && after < 0) {
                after = start;
            }
        });
        if (before < 0 && after < 0) {
            return position;
        }
        if (before < 0) {
            return after;
        }
        return after < 0 || position - before < after - position ? before : after;
    };

    //returns { index, offset } of a position of the text: the editable segment and the position in it
    const locate = (position) => {
        const index = findSegment(position);
        return index < 0 ? null : { index, offset: position - getStarts()[index] };
    };

    //the index of the typed character that is at the right of a position of a segment
    const getTypedIndex = (segment, offset) => Math.max(0, Math.min(segment.buffer.length, offset - getOffset(segment)));

    //the position of the text of the insertion point at a typed index of a segment
    const getCaretAt = (index, typedIndex) => {
        const segment = segments[index];
        return getStarts()[index] + getOffset(segment) + typedIndex;
    };

    //the status of the input: if it is empty or incomplete, and the segments that are not valid
    const getStatus = () => {
        const editable = segments.filter(segment => segment.editable);
        const analyses = segments.map(segment => segment.editable ? analyze(segment) : null);
        const error = analyses.find(analysis => analysis && analysis.message !== '');
        return {
            analyses,
            empty: editable.every(segment => segment.buffer.length === 0),
            incomplete: editable.some(segment => !isComplete(segment)),
            error: error ?? null
        };
    };

    //the value: the text of the segments, if the segments are complete and valid
    const getValue = () => {
        if (!hasEditable) {
            return textGetter.call(element);
        }
        const status = getStatus();
        if (status.incomplete || status.error) {
            return '';
        }
        return segments.map(segment => segment.editable ? getValueText(segment) : segment.label).join('');
    };

    //shows the segments in the input, and the segments that are not valid in the error color; places the caret if it is given
    const render = (caret) => {
        const status = getStatus();
        const parts = [];
        let text = '';
        segments.forEach((segment, index) => {
            if (!segment.editable) {
                text += segment.label;
                parts.push({ text: segment.label });
                return;
            }
            const analysis = status.analyses[index];
            const offset = getOffset(segment);
            getShownChars(segment).forEach((char, position) => {
                text += char;
                parts.push({ text: char, error: analysis.whole || analysis.chars.has(position), placeholder: position < offset || position >= offset + segment.buffer.length });
            });
        });

        //consecutive characters with the same style are one part
        const merged = [];
        for (const part of parts) {
            const last = merged[merged.length - 1];
            if (last && !!last.error === !!part.error && !!last.placeholder === !!part.placeholder) {
                last.text += part.text;
            }
            else {
                merged.push({ ...part });
            }
        }

        textSetter.call(element, text);
        overlay.update(merged);
        element.size = text.length + 1;
        if (hasEditable) {
            element.error = status.error !== null;
            element.setCustomValidity(
                status.error ? status.error.message : status.empty ? (element.required ? 'Please fill out this field.' : '') : status.incomplete ? 'Please enter a complete value.' : '');
        }
        if (caret !== undefined && document.activeElement === element) {
            element.setSelectionRange(caret, caret);
        }
    };

    //called after the user changed a segment
    const edited = (caret) => {
        render(caret);
        element.dispatchEvent(new Event('input', { bubbles: true }));
        const value = getValue();
        if (value !== lastValue) {
            lastValue = value;
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    };

    //removes the typed characters that are between two positions of the text; returns the position of the caret
    const deleteRange = (start, end) => {
        const starts = getStarts();
        let caret = null;
        segments.forEach((segment, index) => {
            if (!segment.editable) {
                return;
            }
            const from = Math.max(start, starts[index]) - starts[index];
            const to = Math.min(end, starts[index] + segment.length) - starts[index];
            if (from > to || (from === to && caret !== null)) {
                return;
            }
            const first = getTypedIndex(segment, from);
            const last = getTypedIndex(segment, to);
            if (last > first) {
                segment.buffer.splice(first, last - first);
            }
            if (caret === null && from <= segment.length && to >= 0) {
                caret = getCaretAt(index, first);
            }
        });
        return caret ?? snap(start);
    };

    //types a character at a position; returns the position of the caret, or null if the character cannot be typed
    const insertChar = (position, char) => {
        const located = locate(snap(position));
        if (!located) {
            return null;
        }
        const { index, offset } = located;
        const segment = segments[index];
        const length = segment.buffer.length;
        let typed = getTypedIndex(segment, offset);

        //the separator that follows a segment that has characters selects the next segment, if the character is not valid in the segment
        const following = segments[index + 1];
        if (following && !following.editable && char.trim() !== '' && following.label[0] === char && isComplete(segment) &&
            !segment.positions.some(position => position.some(node => classMatches(node, char, segment.ignoreCase)))) {
            const next = findNextEditable(index);
            if (next >= 0) {
                return getNaturalCaret(next);
            }
        }

        if (length < segment.length) {
            segment.buffer.splice(typed, 0, char);
            if (length + 1 === segment.length && typed === length) {
                const next = findNextEditable(index);
                if (next >= 0) {
                    return getNaturalCaret(next);
                }
            }
            return getCaretAt(index, typed + 1);
        }

        //the segment has all its characters
        if (typed === length) {
            const next = findNextEditable(index);
            return next >= 0 ? insertChar(getNaturalCaret(next), char) : null;
        }
        segment.buffer[typed] = char;
        if (typed + 1 === segment.length) {
            const next = findNextEditable(index);
            if (next >= 0) {
                return getNaturalCaret(next);
            }
        }
        return getCaretAt(index, typed + 1);
    };

    //deletes the character before a position; returns the position of the caret, or null if there is nothing to delete
    const deleteBackward = (position) => {
        const located = locate(snap(position));
        if (!located) {
            return null;
        }
        const { index, offset } = located;
        const segment = segments[index];
        const typed = getTypedIndex(segment, offset);
        if (typed > 0) {
            segment.buffer.splice(typed - 1, 1);
            return getCaretAt(index, typed - 1);
        }

        //nothing before the position in the segment: go to the previous segment, and delete its last character
        const previous = findPreviousEditable(index);
        if (previous < 0) {
            return null;
        }
        const length = segments[previous].buffer.length;
        if (length === 0) {
            return getNaturalCaret(previous);
        }
        segments[previous].buffer.splice(length - 1, 1);
        return getCaretAt(previous, length - 1);
    };

    //deletes the character after a position; returns the position of the caret, or null if there is nothing to delete
    const deleteForward = (position) => {
        const located = locate(snap(position));
        if (!located) {
            return null;
        }
        const { index, offset } = located;
        const segment = segments[index];
        const typed = getTypedIndex(segment, offset);
        if (typed >= segment.buffer.length) {
            return null;
        }
        segment.buffer.splice(typed, 1);
        return getCaretAt(index, typed);
    };

    //changes the number of the segment of a position by a step; returns the position of the caret, or null if the segment has no number
    const stepNumber = (position, direction) => {
        const located = locate(snap(position));
        const segment = located && segments[located.index];
        if (!segment || !segment.numeric) {
            return null;
        }
        const step = segment.step ?? 1;
        const base = segment.min ?? 0;
        let number;
        if (segment.buffer.length === 0) {
            number = direction > 0 ? base : segment.max ?? base;
        }
        else {
            const current = getNumber(segment);
            const index = (current - base) / step;
            number = base + (direction > 0 ? Math.floor(index + 1e-9) + 1 : Math.ceil(index - 1e-9) - 1) * step;
        }
        if (segment.min !== undefined) {
            number = Math.max(number, segment.min);
        }
        if (segment.max !== undefined) {
            number = Math.min(number, segment.max);
        }
        const chars = formatNumber(segment, number);
        if (!chars) {
            return null;
        }
        segment.buffer = chars;
        return getNaturalCaret(located.index);
    };

    //parses a text with the separators into the characters of the segments, or returns null if the text does not fit in the mask
    const parseText = (text) => {
        const buffers = [];
        let position = 0;
        for (let index = 0; index < segments.length; index++) {
            const segment = segments[index];
            if (!segment.editable) {
                const part = text.substr(position, segment.length);
                if (part.length !== segment.length || (part !== segment.label && segment.label.trim() !== '')) {
                    return null;
                }
                position += segment.length;
                continue;
            }
            const next = segments[index + 1];
            let end;
            if (next && !next.editable && next.label.trim() !== '') {
                end = text.indexOf(next.label, position);
                if (end < 0) {
                    return null;
                }
            }
            else {
                end = Math.min(position + segment.length, text.length);
            }
            if (end - position > segment.length) {
                return null;
            }
            buffers[index] = Array.from(text.slice(position, end));
            position = end;
        }
        return position === text.length ? buffers : null;
    };

    //assigns a text with the separators to the segments; a text that does not fit in the mask clears the segments
    const setText = (text) => {
        const buffers = text === '' ? null : parseText(text);
        segments.forEach((segment, index) => {
            if (segment.editable) {
                segment.buffer = buffers?.[index] ?? [];
            }
        });
    };

    //the first position of the caret: in the first segment that is not complete
    const getFirstCaret = () => {
        const index = segments.findIndex(segment => segment.editable && !isComplete(segment));
        const first = index >= 0 ? index : segments.findIndex(segment => segment.editable);
        return first >= 0 ? getNaturalCaret(first) : 0;
    };

    //moves a position by one character, skipping the text segments
    const move = (position, direction) => {
        const located = locate(snap(position));
        if (!located) {
            return position;
        }
        const starts = getStarts();
        const start = starts[located.index];
        const end = start + segments[located.index].length;
        const target = snap(position) + direction;
        if (target >= start && target <= end) {
            return target;
        }
        if (direction > 0) {
            const next = findNextEditable(located.index);
            return next < 0 ? position : starts[next] > end ? starts[next] : end + 1;
        }
        const previous = findPreviousEditable(located.index);
        return previous < 0 ? position : starts[previous] + segments[previous].length;
    };

    //loads a text into the segments and shows it
    const load = (text) => {
        setText(text);
        render();
        lastValue = getValue();
    };

    //the events
    element.addEventListener('beforeinput', (event) => {
        if (!hasEditable) {
            return;
        }
        event.preventDefault();
        if (element.readOnly) {
            return;
        }
        const start = element.selectionStart;
        const end = element.selectionEnd;
        const selected = start !== end;
        let caret;
        switch (event.inputType) {
            case 'insertText': {
                caret = selected ? deleteRange(start, end) : start;
                let changed = selected;
                for (const char of event.data ?? '') {
                    if (char < ' ' || char === '\x7f') {
                        continue;
                    }
                    const next = insertChar(caret, char);
                    if (next !== null) {
                        caret = next;
                        changed = true;
                    }
                }
                if (changed) {
                    edited(caret);
                }
                break;
            }
            case 'insertFromPaste':
            case 'insertFromDrop': {
                const text = (event.data ?? event.dataTransfer?.getData('text') ?? '').replace(/[\r\n]+/g, '');
                if (selected) {
                    caret = deleteRange(start, end);
                }
                const buffers = text === '' ? null : parseText(text);
                if (buffers) {
                    setText(text);
                    edited(getFirstCaret());
                    break;
                }
                caret ??= start;
                for (const char of text) {
                    if (char >= ' ' && char !== '\x7f') {
                        caret = insertChar(caret, char) ?? caret;
                    }
                }
                edited(caret);
                break;
            }
            case 'deleteContentBackward':
            case 'deleteWordBackward':
                caret = selected ? deleteRange(start, end) : deleteBackward(start);
                if (caret !== null) {
                    edited(caret);
                }
                break;
            case 'deleteContentForward':
            case 'deleteWordForward':
                caret = selected ? deleteRange(start, end) : deleteForward(start);
                if (caret !== null) {
                    edited(caret);
                }
                break;
            case 'deleteByCut':
            case 'deleteByDrag':
                if (selected) {
                    edited(deleteRange(start, end));
                }
                break;
        }
    });

    element.addEventListener('keydown', (event) => {
        if (!hasEditable || event.ctrlKey || event.metaKey || event.altKey || element.readOnly) {
            return;
        }
        const start = element.selectionStart;
        const end = element.selectionEnd;
        const setCaret = (caret) => element.setSelectionRange(caret, caret);
        switch (event.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
                if (event.shiftKey) {
                    return;
                }
                event.preventDefault();
                if (start !== end) {
                    setCaret(event.key === 'ArrowLeft' ? start : end);
                }
                else {
                    setCaret(move(start, event.key === 'ArrowLeft' ? -1 : 1));
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown': {
                event.preventDefault();
                const caret = stepNumber(start, event.key === 'ArrowUp' ? 1 : -1);
                if (caret !== null) {
                    edited(caret);
                }
                break;
            }
            case 'Home':
            case 'End': {
                if (event.shiftKey) {
                    return;
                }
                event.preventDefault();
                const starts = getStarts();
                const first = segments.findIndex(segment => segment.editable);
                const last = segments.findLastIndex(segment => segment.editable);
                setCaret(event.key === 'Home' ? starts[first] : starts[last] + segments[last].length);
                break;
            }
            case 'Tab': {
                const index = findSegment(snap(start));
                const target = event.shiftKey ? findPreviousEditable(index) : findNextEditable(index);
                if (index >= 0 && target >= 0) {
                    event.preventDefault();
                    setCaret(getNaturalCaret(target));
                }
                break;
            }
        }
    });

    //after a click, the caret is placed in a segment that can be edited
    element.addEventListener('mousedown', () => { mouseDown = true; });
    const placeCaret = () => {
        mouseDown = false;
        if (hasEditable && element.selectionStart === element.selectionEnd) {
            const caret = snap(element.selectionStart);
            element.setSelectionRange(caret, caret);
        }
    };
    element.addEventListener('mouseup', placeCaret);
    element.addEventListener('click', placeCaret);

    //the caret is placed in the first segment that is not complete when the field gets the focus from the keyboard
    element.addEventListener('focus', () => {
        if (hasEditable && !mouseDown) {
            const caret = getFirstCaret();
            element.setSelectionRange(caret, caret);
        }
    });

    //the interface of an input: the value is the text of the segments, and the empty string while it is incomplete or not valid
    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => getValue(),
        set: (value) => {
            if (hasEditable) {
                load(value === null || value === undefined ? '' : String(value));
            }
            else {
                textSetter.call(element, value);
            }
        }
    });

    //creates the segments of the mask, and shows them; the value is kept if it is complete and the new mask accepts it
    const build = (mask, text) => {
        segments = createSegments(mask);
        hasEditable = segments.some(segment => segment.editable);
        element.inputMode = hasEditable && segments.every(segment => !segment.editable || segment.digitOnly) ? 'numeric' : 'text';
        if (hasEditable) {
            load(text);
        }
        else {
            element.error = false;
            element.setCustomValidity('');
            overlay.update([]);
        }
    };

    Object.defineProperty(element, 'mask', {
        configurable: true,
        enumerable: true,
        get: () => state.mask,
        set: (mask) => {
            const text = getValue();
            createSegments(mask);       //throws an error if the mask is not valid, before changing anything
            state.mask = mask;
            build(mask, text);
        }
    });

    element.autocomplete = 'off';
    element.spellcheck = false;

    //the properties that were set while the element was initialized are the initial state
    const initialText = textGetter.call(element);
    build(state.mask, initialText);
    registerFormSubmitter(element);
    if (element.label) {
        element.label = element.label;
    }
};

/**
 * Initializes an instance of HTMLInputElement as a masked input, looking like a MUI text field.
 *
 * It invokes the function `initInput(element, ...properties)`.
 *
 * The element gets the property `mask`, which is an array of mask entries. Each entry is one segment of the mask, and has the fields:
 *  - `label`: the text of the segment; it must be a string (it can be empty, or have spaces, but not null or undefined). It is what the segment
 *    shows where the user has not typed. The characters of the label must be in the basic multilingual plane.
 *  - `pattern`: a regular expression, or a string with the source of a regular expression, that the text of the segment must match; it
 *    always matches the whole text of the segment (`^` and `$` are implied, and not accepted). If it is not given, the segment is a text
 *    segment: it shows its label and cannot be edited, as the separators of the mask.
 *  - `min`, `max`, `step`: optional numbers, which are checked only if the segment is numeric, and only if they are given.
 *
 * For example, a mask for an IPv4 address:
 *
 *     [
 *         { label: '___', pattern: '[0-9]{3}', min: 0, max: 255 },
 *         { label: '.' },
 *         { label: '___', pattern: '[0-9]{3}', min: 0, max: 255 },
 *         { label: '.' },
 *         { label: '___', pattern: '[0-9]{3}', min: 0, max: 255 },
 *         { label: '.' },
 *         { label: '___', pattern: '[0-9]{3}', min: 0, max: 255 }
 *     ]
 *
 * The text of the segment must always have the length of its label, so the pattern must match texts of that length only; if it does not,
 * a `MaskError` (see MaskError.js) is thrown, as for any other error in the mask, either when the mask is set or when the element is created:
 * "Label/pattern length mismatch at index 2; label = '___', pattern = '[0-9]{3}'". The mask is not changed if it is not valid.
 *
 * The patterns can use everything that describes the text of a segment in the regular expressions of JavaScript, including the alternation:
 * characters and escapes (`\n`, `\x41`, `A`, `\.`), the classes `\d \D \w \W \s \S` `.` and `\p{...}`, the sets `[...]` and `[^...]`,
 * the groups `(...)` and `(?:...)`, the alternation `|`, and the quantifiers `* + ? {n} {n,} {n,m}` (with the lazy forms). A regular expression
 * object gives its pattern and its flag `i` (ignore case). What is not supported (a `MaskError` is thrown): the anchors `^` and `$`; the word
 * boundaries `\b` and `\B`; the back-references `\1` and `\k<name>`; the lookaheads `(?=` and `(?!`, and the lookbehinds `(?<=` and `(?<!`;
 * the named groups `(?<name>`, and the modifiers `(?i:`; the control escapes `\cX`; the flags other than `i`.
 *
 * A segment is numeric if its pattern matches only integers, positive (`[0-9]{3}`) or negative (`[+-][0-9]{2}`). The user types the numbers
 * from the right, as in a calculator: the characters that are not typed yet are the characters of the label, so the label `___` shows `__1`
 * after typing `1`, and `_12` after typing `2`; the value of the segment is then `001` and `012`. The other texts are typed from the left. A
 * numeric segment is checked against `min`, `max` and `step` (the multiples of the step, counted from `min` if it is given, else from zero).
 *
 * The user can type any character: what is not valid is not replaced by something that is valid; it is shown in the error color: the
 * characters that cannot be in the position, or the whole segment, if its text is not valid (it does not match the pattern, it is out of the
 * range, or it is not a multiple of the step). The input is then in error: its border and its label are in the error color, as for any input
 * with the property `error`, and the value of the input is empty. The error is not shown for an incomplete input.
 *
 * The text cursor is visible and indicates where the typed character goes. ArrowLeft and ArrowRight move it, skipping the text segments, as Tab and
 * Shift+Tab move it between the segments; ArrowUp and ArrowDown change a numeric segment by its step (or by 1), within `min` and `max`. Typing the
 * separator (the first character of the text segment that follows) after the characters of a numeric segment goes to the next segment. When the
 * user deletes characters (Backspace, Delete, or a selection), the others move to fill the gap: the characters of a number move to the right, and
 * the characters of a text to the left, and the label shows in the characters that are free. Pasting a text with the separators ('192.168.1.1')
 * fills the segments; any other text is typed.
 *
 * The property `value` is the text of the segments and the text segments, where the numbers have zeroes at the left ('192.168.001.001'), or the
 * empty string while the segments are incomplete or not valid; when it is set, a text that does not fit in the mask clears the input. A mask
 * with no segment to edit leaves the input as a plain text input. The element is invalid (a custom validity error, so `validity.valid` and
 * `validationMessage` work) if it is not valid, incomplete, or empty with `required`. The event 'input' is dispatched after every edit, and
 * 'change' when the value changes. Form submission sends the value.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMaskedInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    initInput(element, { additionalClassName: 'maskedInput' }, ...properties);

    //the mask that was set while the element was initialized is the initial one
    attachMask(element, { mask: element.mask ?? [] });
}

/**
 * Creates a masked input.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const maskedInput = (...properties) => {
    const element = document.createElement('input');
    initMaskedInput(element, ...properties);
    return element;
}
