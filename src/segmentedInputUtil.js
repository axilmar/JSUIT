import { whenInputPlaced } from "./input.js";

const nativeValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');

//the elements that must submit their value with a form, as weak references
let submitters = [];

//replaces, in the data of a submitted form, the displayed text of the segmented inputs by their values
document.addEventListener('formdata', (event) => {
    submitters = submitters.filter(reference => reference.deref());
    for (const reference of submitters) {
        const element = reference.deref();
        if (element.form === event.target && element.name && !element.disabled) {
            event.formData.set(element.name, element.value);
        }
    }
});

/**
 * Makes an input element submit the value of its property 'value' with a form, instead of the text that it displays. It is for the inputs
 * that display a text that is not their value, as the segmented inputs.
 *
 * @param {*} element the input element.
 */
export const registerFormSubmitter = (element) => {
    submitters.push(new WeakRef(element));
};

//the styles of the input that the overlay copies, so that its text is exactly over the text of the input
const COPIED_STYLES = [
    'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
    'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth',
    'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing', 'textTransform', 'textIndent'
];

/**
 * Makes an input element show its text with some parts in other colors, as the parts that are in error. An input cannot color parts of its text,
 * so the text of the input becomes transparent (the caret and the selection stay), and the overlay, which is an element over the input in the
 * container of the input (see `getInputContainer` in input.js), shows the same text with the parts. The overlay is created when the input has a parent.
 *
 * @param {*} element the input element.
 *
 * @return {{update: Function}} an object with the function `update(parts)`, which is passed the parts of the text, as an array of objects
 *  `{ text, error, placeholder }`: the text of the part, and if it is in the error color, and if it is dimmed (a placeholder). The parts
 *  must have all the text of the input.
 */
export const attachTextOverlay = (element) => {
    let overlay = null;
    let content = null;
    let parts = [];

    //puts the overlay exactly over the input
    const sync = () => {
        if (!overlay) {
            return;
        }
        const style = getComputedStyle(element);
        for (const name of COPIED_STYLES) {
            overlay.style[name] = style[name];
        }
        overlay.style.left = element.offsetLeft + 'px';
        overlay.style.top = element.offsetTop + 'px';
        overlay.style.width = element.offsetWidth + 'px';
        overlay.style.height = element.offsetHeight + 'px';
    };

    const draw = () => {
        if (!overlay) {
            return;
        }
        content.replaceChildren(...parts.map(part => {
            const span = document.createElement('span');
            span.textContent = part.text;
            span.classList.toggle('input-overlay-error', !!part.error);
            span.classList.toggle('input-overlay-placeholder', !!part.placeholder);
            return span;
        }));
    };

    whenInputPlaced(element, (container) => {
        overlay = document.createElement('span');
        overlay.className = 'input-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        content = document.createElement('span');
        overlay.append(content);
        element.before(overlay);        //before the input, because the label must be the sibling that follows the input (see input.css)
        element.classList.add('input-overlaid');
        new ResizeObserver(sync).observe(element);
        new MutationObserver(sync).observe(element, { attributes: true, attributeFilter: ['class', 'style'] });
        sync();
        draw();
    });

    return {
        update(newParts) {
            parts = newParts;
            draw();
            sync();
        }
    };
};

/**
 * Turns an input element into a segmented input: a text input that shows a fixed layout of segments and separators, as 'mm/dd/yyyy', and
 * that the user edits one segment at a time. It is the engine of the date and time inputs (see `attachSegmentedInput` in dateTimeUtil.js),
 * which describe their layout with an adapter. (The masked input, which has a caret, is edited by its own code; see maskedInput.js.)
 *
 * The user edits like in the date inputs of the browsers: typing fills the selected segment, and the selection moves to the next segment when
 * the segment is complete; ArrowLeft, ArrowRight and Tab move between the segments; ArrowUp and ArrowDown change the segment, if it can be
 * changed; Backspace and Delete clear (or shorten) the segment; pasted text fills the segments; clicking selects the segment under the cursor.
 *
 * The element gets a property 'value', which is the value of the adapter, and not the displayed text; it is the empty string while the value is
 * incomplete. The element is made valid or invalid with `setCustomValidity` after every change, from the message of the adapter. The event
 * 'input' is dispatched after every edit, and 'change' when the value changes. Form submission sends the value. The label of the input
 * (see input.js) works.
 *
 * It must be invoked after `initInput`, because it wraps the element's 'value' property.
 *
 * The adapter is an object with:
 *  - `build()`: creates the layout, and returns it: an array of `{ literal }` objects (the separators, with a string) and `{ segment }` objects.
 *    The segments are objects with the methods:
 *      - `text()`: the displayed text of the segment; it must have the same length while the segment is edited, so that the field does not move.
 *      - `isEmpty()`, `clear()`: if the segment has no value, and removes the value.
 *      - `type(char)`: types a character; returns `null` if the character is not accepted, `true` if the segment is complete and the selection
 *        should move to the next segment, `false` otherwise.
 *      - `endTyping()` (optional): called when the selection leaves the segment, to end the typing in progress.
 *      - `step(direction)` (optional): changes the segment by one step, for the ArrowUp (1) and ArrowDown (-1) keys.
 *      - `backspace()` (optional): for the Backspace key, instead of `clear()`; returns `true` if the segment changed, `'previous'` to select the
 *        previous segment, or `false`.
 *      - `canLeave()` (optional): if it returns true, the segment is satisfied: typing the separator that follows the segment selects the next
 *        segment, and a character that the segment does not accept is typed in the next segments that accept it (see `accepts`).
 *      - `accepts(char)` (optional): returns true if `type(char)` would accept the character; used when the segments before are satisfied.
 *      - `isError()` (optional): returns true if the value of the segment is not valid; the text of the segment is then shown in the error color.
 *        The segments accept the values that are not valid: it is the user that corrects them, seeing which segment is wrong.
 *  - `getValue()`: the value, or the empty string if the segments are incomplete or invalid.
 *  - `setValue(value)`: loads the segments from a value; an invalid value clears them. The segments are those of the last `build()`.
 *  - `validate()`: returns the message of why the segments are not valid, or the empty string.
 *  - `edited()` (optional): called after the user changed a segment, before the displayed text is updated.
 *  - `paste(text)` (optional): handles pasted text; returns true if it changed the segments, false if not; if it does not exist, or it returns
 *    undefined, the characters of the text are typed in the segments, starting from the first.
 *  - `type` (optional): the string that the property 'type' of the element returns.
 *  - `inputMode` (optional): the 'inputmode' of the element; the default is 'numeric'.
 *
 * @param {*} element the input element.
 * @param {Object} adapter the adapter.
 *
 * @return {Object} an object with the functions: `rebuild()` (creates the layout again, keeping the value if it is complete), `show()` (renders
 *  the segments, validates, and sizes the field) and `validate()`.
 */
export const attachSegmentedEditor = (element, adapter) => {
    console.assert(element instanceof HTMLInputElement);

    let layout = [];
    let segments = [];
    const ranges = [];              //the [start, end) of each segment in the displayed text
    const textSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set ?? nativeValue.set;
    const textGetter = Object.getOwnPropertyDescriptor(element, 'value')?.get ?? nativeValue.get;
    let active = 0;                 //the index of the selected segment
    let mouseDown = false;
    let lastValue = '';
    const overlay = attachTextOverlay(element);

    //creates the layout and the segments
    const build = () => {
        layout = adapter.build();
        segments = layout.filter(item => item.segment).map(item => item.segment);
        ranges.length = 0;
        active = Math.max(0, Math.min(active, segments.length - 1));
    };

    //updates the displayed text, keeping the selection on the active segment; the segments that are in error are shown in the error color
    const render = () => {
        let text = '';
        let index = 0;
        const parts = [];
        for (const item of layout) {
            const piece = item.segment ? item.segment.text() : item.literal;
            if (item.segment) {
                ranges[index++] = [text.length, text.length + piece.length];
            }
            parts.push({ text: piece, error: !!item.segment?.isError?.() });
            text += piece;
        }
        textSetter.call(element, text);
        overlay.update(parts);
        if (document.activeElement === element && ranges[active]) {
            element.setSelectionRange(...ranges[active]);
        }
    };

    //sets the validity of the element
    const validate = () => {
        element.setCustomValidity(adapter.validate());
    };

    //shows the segments, and sizes the field for them
    const show = () => {
        render();
        validate();
        lastValue = adapter.getValue();
        element.size = textGetter.call(element).length + 1;
        element.inputMode = adapter.inputMode ?? 'numeric';
    };

    //called after the user changed a segment
    const edited = () => {
        adapter.edited?.();
        render();
        validate();
        element.dispatchEvent(new Event('input', { bubbles: true }));
        const value = adapter.getValue();
        if (value !== lastValue) {
            lastValue = value;
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    };

    //selects a segment
    const select = (index) => {
        segments[active]?.endTyping?.();
        active = Math.max(0, Math.min(segments.length - 1, index));
        render();
        if (ranges[active]) {
            element.setSelectionRange(...ranges[active]);
        }
    };

    //returns true if the character is the separator that follows the active segment, and the segment can be left
    const isSeparator = (char) => {
        const segment = segments[active];
        const following = layout[layout.findIndex(item => item.segment === segment) + 1];
        return active < segments.length - 1 && !!segment.canLeave?.() && !!following?.literal && following.literal.startsWith(char);
    };

    //returns the index of the segment after the active one that accepts the character, if the segments between are satisfied (as the optional
    //segments are), or -1
    const findAcceptingSegment = (char) => {
        for (let index = active; index < segments.length - 1 && segments[index].canLeave?.(); index++) {
            if (segments[index + 1].accepts?.(char)) {
                return index + 1;
            }
        }
        return -1;
    };

    //types a character in the active segment, or in a following segment if the active one does not accept it; the separator that follows the
    //active segment selects the next one. Returns null if the character is not used, or { complete, index } with the result of the segment
    //and its index. If `notify` is true, the events are dispatched and the selection moves to the next segment if the segment is complete.
    const typeChar = (char, notify = true) => {
        let result = segments[active].type(char);
        if (result === null) {
            if (isSeparator(char)) {
                select(active + 1);
                return null;
            }
            const target = findAcceptingSegment(char);
            if (target < 0) {
                return null;
            }
            select(target);
            result = segments[active].type(char);
        }
        const used = { complete: result, index: active };
        if (notify) {
            edited();
            if (result) {
                select(active + 1);
            }
        }
        return used;
    };

    //assigns pasted text
    const pasteText = (text) => {
        const handled = adapter.paste?.(text);
        if (handled !== undefined && handled !== null) {
            if (handled) {
                edited();
            }
            return;
        }

        //type the characters of the text, starting from the first segment
        for (const segment of segments) {
            segment.clear();
        }
        active = 0;
        for (const char of text) {
            const used = typeChar(char, false);
            if (used?.complete) {
                if (used.index === segments.length - 1) {
                    break;
                }
                select(used.index + 1);
            }
        }
        edited();
    };

    //clears the active segment, if it has a value
    const clearSegment = () => {
        const segment = segments[active];
        if (!segment.isEmpty()) {
            segment.clear();
            edited();
        }
    };

    //the events
    element.addEventListener('beforeinput', (event) => {
        event.preventDefault();
        if (segments.length === 0) {
            return;
        }
        const segment = segments[active];
        switch (event.inputType) {
            case 'insertText':
                for (const char of event.data ?? '') {
                    typeChar(char);
                }
                break;
            case 'insertFromPaste':
            case 'insertFromDrop':
                pasteText(event.data ?? event.dataTransfer?.getData('text') ?? '');
                break;
            case 'deleteContentBackward':
            case 'deleteWordBackward':
                if (segment.backspace) {
                    const result = segment.backspace();
                    if (result === true) {
                        edited();
                    }
                    else if (result === 'previous') {
                        select(active - 1);
                    }
                }
                else {
                    clearSegment();
                }
                break;
            case 'deleteContentForward':
            case 'deleteByCut':
            case 'deleteWordForward':
                clearSegment();
                break;
        }
    });

    element.addEventListener('keydown', (event) => {
        if (event.ctrlKey || event.metaKey || event.altKey || element.readOnly || segments.length === 0) {
            return;
        }
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                if (segments[active].step) {
                    segments[active].step(event.key === 'ArrowUp' ? 1 : -1);
                    edited();
                }
                break;
            case 'ArrowLeft':
                event.preventDefault();
                select(active - 1);
                break;
            case 'ArrowRight':
                event.preventDefault();
                select(active + 1);
                break;
            case 'Tab': {
                const target = active + (event.shiftKey ? -1 : 1);
                if (target >= 0 && target < segments.length) {
                    event.preventDefault();
                    select(target);
                }
                break;
            }
        }
    });

    //selects the segment under the caret after a click
    element.addEventListener('mousedown', () => { mouseDown = true; });
    element.addEventListener('mouseup', () => { mouseDown = false; });
    element.addEventListener('click', () => {
        if (segments.length === 0) {
            return;
        }
        const caret = element.selectionStart;
        const index = ranges.findIndex(([start, end]) => caret >= start && caret <= end);
        select(index >= 0 ? index : caret < ranges[0][0] ? 0 : segments.length - 1);
    });

    //selects the first segment when the field gets the focus from the keyboard; completes the typing in progress on blur
    element.addEventListener('focus', () => {
        if (!mouseDown && segments.length > 0) {
            select(0);
        }
    });
    element.addEventListener('blur', () => {
        segments[active]?.endTyping?.();
        render();
    });

    //the interface of a native input
    if (adapter.type) {
        Object.defineProperty(element, 'type', { configurable: true, enumerable: true, get: () => adapter.type, set: () => {} });
    }
    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => adapter.getValue(),
        set: (value) => {
            adapter.setValue(value);
            render();
            validate();
            lastValue = adapter.getValue();
        }
    });

    element.autocomplete = 'off';
    element.spellcheck = false;

    //the layout is created again, and the value is kept if it is complete
    const rebuild = () => {
        const value = adapter.getValue();
        build();
        adapter.setValue(value);
        show();
    };

    //load the value the element already has (properties are applied before this function is invoked), then show the label as shrunk
    const initialValue = textGetter.call(element);
    build();
    adapter.setValue(initialValue);
    show();
    registerFormSubmitter(element);
    if (element.label) {
        element.label = element.label;
    }

    return { rebuild, show, validate };
};
