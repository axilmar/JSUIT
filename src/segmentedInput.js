import { parseValue, formatValue, getIsoWeek } from "./dateTimePicker.js";

const nativeValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');

const hour12 = new Intl.DateTimeFormat(undefined, { hour: 'numeric' }).resolvedOptions().hour12 === true;
const SAMPLE_DATE = new Date(2000, 0, 15, 13, 5);   //any date and time with a 2-digit PM hour, to get the layout of the locale

//the elements that must submit their ISO value with a form, as weak references
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

const daysInMonth = (year, month) => new Date(year ?? 2000, month ?? 1, 0).getDate();     //month is 1-12

const weeksInYear = (year) => getIsoWeek(year, 11, 28).week;                              //december 28th is always in the last week

//creates the segments and literals of the type, as an array of { literal } and { segment } objects
const createLayout = (type) => {
    const segment = (kind, digits, min, max, placeholder) => ({ segment: { kind, digits, min, max, placeholder, value: null, buffer: '' } });
    if (type === 'week') {
        return [{ literal: 'Week ' }, segment('week', 2, 1, 53, 'ww'), { literal: ', ' }, segment('weekYear', 4, 1, 9999, 'yyyy')];
    }

    const options = {
        date: { year: 'numeric', month: '2-digit', day: '2-digit' },
        'datetime-local': { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12 },
        time: { hour: '2-digit', minute: '2-digit', hour12 },
        month: { year: 'numeric', month: '2-digit' }
    }[type];
    const layout = [];
    const periods = [];

    for (const part of new Intl.DateTimeFormat(undefined, options).formatToParts(SAMPLE_DATE)) {
        switch (part.type) {
            case 'month': layout.push(segment('month', 2, 1, 12, 'mm')); break;
            case 'day': layout.push(segment('day', 2, 1, 31, 'dd')); break;
            case 'year': layout.push(segment('year', 4, 1, 9999, 'yyyy')); break;
            case 'hour': layout.push(hour12 ? segment('hour', 2, 1, 12, 'hh') : segment('hour', 2, 0, 23, 'hh')); break;
            case 'minute': layout.push(segment('minute', 2, 0, 59, 'mm')); break;
            case 'dayPeriod': layout.push(segment('ampm', 0, 0, 1, '')); break;
            case 'literal': layout.push({ literal: part.value }); break;
        }
    }

    //the AM and PM labels of the locale
    for (const hour of [1, 13]) {
        const label = new Intl.DateTimeFormat(undefined, { hour: 'numeric', hour12: true }).formatToParts(new Date(2000, 0, 15, hour)).find(part => part.type === 'dayPeriod');
        periods.push(label?.value ?? (hour < 12 ? 'AM' : 'PM'));
    }
    for (const item of layout) {
        if (item.segment?.kind === 'ampm') {
            item.segment.labels = periods;
            item.segment.digits = Math.max(...periods.map(period => period.length));
            item.segment.placeholder = '-'.repeat(item.segment.digits);
        }
    }
    return layout;
};

/**
 * Turns an input element into a segmented date/time input, which does not depend on the browser's own date input,
 * so that no native popup can appear (Firefox, for example, opens one when clicking the field).
 *
 * The element is a text input that shows the locale's format ('mm/dd/yyyy, hh:mm aa'); the user edits one segment at a time:
 * digits fill the selected segment and move to the next one when it is complete, ArrowUp and ArrowDown change the segment,
 * ArrowLeft, ArrowRight and Tab move between segments, Backspace and Delete clear the segment.
 *
 * The element keeps the interface of the native input of the given type:
 *  - `type` returns the given type, and `value` returns and accepts the ISO value of that type ('2026-10-21T14:30', '14:30',
 *    '2026-10', '2026-W43'); it is the empty string while the field is empty or incomplete.
 *  - `min`, `max` and `required` are checked after every edit: the validity of the element is set (as a custom error, so
 *    `validity.valid` and `validationMessage` work), but `validity.rangeUnderflow` and the like are not. `step` is not checked.
 *  - The 'input' event is dispatched after every edit, and 'change' when the value changes.
 *  - Form submission sends the ISO value.
 * `valueAsDate`, `valueAsNumber`, `stepUp` and `stepDown` are not available.
 *
 * It must be invoked after `initInputField`, because it wraps the element's 'value' property.
 *
 * @param {*} element the input element.
 * @param {string} type 'date', 'datetime-local', 'time', 'month' or 'week'.
 */
export const attachSegmentedInput = (element, type) => {
    console.assert(element instanceof HTMLInputElement);
    console.assert(['date', 'datetime-local', 'time', 'month', 'week'].includes(type));

    const layout = createLayout(type);
    const segments = layout.filter(item => item.segment).map(item => item.segment);
    const ranges = [];              //the [start, end) of each segment in the displayed text
    const textSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set ?? nativeValue.set;
    const textGetter = Object.getOwnPropertyDescriptor(element, 'value')?.get ?? nativeValue.get;
    let active = 0;                 //the index of the selected segment
    let mouseDown = false;
    let lastValue = '';

    const now = new Date();
    const find = (kind) => segments.find(segment => segment.kind === kind);

    //the text shown for a segment
    const display = (segment) => {
        let text;
        if (segment.kind === 'ampm') {
            text = segment.value === null ? segment.placeholder : segment.labels[segment.value];
            return text.padEnd(segment.digits);
        }
        if (segment.buffer) {
            return segment.buffer.padStart(segment.digits, '0');
        }
        return segment.value === null ? segment.placeholder : String(segment.value).padStart(segment.digits, '0');
    };

    //the largest value of a segment; the days depend on the month and year
    const maxOf = (segment) => {
        if (segment.kind === 'day') {
            return daysInMonth(find('year')?.value, find('month')?.value);
        }
        if (segment.kind === 'week') {
            const year = find('weekYear')?.value;
            return year ? weeksInYear(year) : 53;
        }
        return segment.max;
    };

    //keeps the day and week inside their month and year
    const clamp = () => {
        for (const kind of ['day', 'week']) {
            const segment = find(kind);
            if (segment?.value !== null && segment?.value > maxOf(segment)) {
                segment.value = maxOf(segment);
            }
        }
    };

    //returns the ISO value of the segments, or '' if they are incomplete or not a date
    const getIsoValue = () => {
        if (segments.some(segment => segment.value === null)) {
            return '';
        }
        const get = (kind) => find(kind)?.value;
        if (type === 'week') {
            const year = get('weekYear');
            return get('week') <= weeksInYear(year) ? `${String(year).padStart(4, '0')}-W${String(get('week')).padStart(2, '0')}` : '';
        }
        const ampm = get('ampm');
        const hour = hour12 ? get('hour') % 12 + 12 * (ampm ?? 0) : get('hour');
        const value = { year: get('year') ?? 2000, month: (get('month') ?? 1) - 1, day: get('day') ?? 1, hour: hour ?? 0, minute: get('minute') ?? 0 };
        if (value.day > daysInMonth(value.year, value.month + 1)) {
            return '';
        }
        return formatValue(type, value);
    };

    //loads the segments from an ISO value; an invalid value clears them
    const setIsoValue = (iso) => {
        for (const segment of segments) {
            segment.value = null;
            segment.buffer = '';
        }
        const week = type === 'week' && /^(\d{4,})-W(\d{2})/.exec(iso ?? '');
        const value = !week && parseValue(type, iso);
        if (week) {
            find('weekYear').value = +week[1];
            find('week').value = +week[2];
        }
        else if (value) {
            const set = (kind, number) => { const segment = find(kind); if (segment) segment.value = number; };
            set('year', value.year);
            set('month', value.month + 1);
            set('day', value.day);
            set('hour', hour12 ? (value.hour + 11) % 12 + 1 : value.hour);
            set('ampm', value.hour >= 12 ? 1 : 0);
            set('minute', value.minute);
        }
    };

    //updates the displayed text, keeping the selection on the active segment
    const render = () => {
        let text = '';
        let index = 0;
        for (const item of layout) {
            const piece = item.segment ? display(item.segment) : item.literal;
            if (item.segment) {
                ranges[index++] = [text.length, text.length + piece.length];
            }
            text += piece;
        }
        textSetter.call(element, text);
        if (document.activeElement === element) {
            element.setSelectionRange(...ranges[active]);
        }
    };

    //sets the validity of the element from the segments, min, max and required
    const updateValidity = () => {
        const filled = segments.filter(segment => segment.value !== null).length;
        const iso = getIsoValue();
        const min = element.min?.slice(0, iso.length || undefined);
        const max = element.max?.slice(0, iso.length || undefined);
        let message = '';
        if (filled === 0) {
            message = element.required ? 'Please fill out this field.' : '';
        }
        else if (filled < segments.length) {
            message = 'Please enter a complete value.';
        }
        else if (!iso) {
            message = 'Please enter a valid value.';
        }
        else if (min && iso < min) {
            message = `Value must be ${element.min} or later.`;
        }
        else if (max && iso > max) {
            message = `Value must be ${element.max} or earlier.`;
        }
        element.setCustomValidity(message);
    };

    //called after the user changed a segment
    const edited = () => {
        clamp();
        render();
        updateValidity();
        element.dispatchEvent(new Event('input', { bubbles: true }));
        const value = getIsoValue();
        if (value !== lastValue) {
            lastValue = value;
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    };

    //selects a segment
    const select = (index) => {
        const previous = segments[active];
        previous.buffer = '';
        active = Math.max(0, Math.min(segments.length - 1, index));
        render();
        element.setSelectionRange(...ranges[active]);
    };

    //the value of a segment while it has none, when the user presses the arrows
    const defaultValue = (segment) => {
        const isoWeek = getIsoWeek(now.getFullYear(), now.getMonth(), now.getDate());
        switch (segment.kind) {
            case 'year': return now.getFullYear();
            case 'month': return now.getMonth() + 1;
            case 'day': return now.getDate();
            case 'hour': return hour12 ? (now.getHours() + 11) % 12 + 1 : now.getHours();
            case 'minute': return now.getMinutes();
            case 'ampm': return now.getHours() >= 12 ? 1 : 0;
            case 'week': return isoWeek.week;
            case 'weekYear': return isoWeek.year;
        }
    };

    //changes a segment by one step, wrapping around
    const step = (segment, direction) => {
        segment.buffer = '';
        if (segment.value === null) {
            segment.value = defaultValue(segment);
        }
        else {
            const max = maxOf(segment);
            const value = segment.value + direction;
            segment.value = value > max ? segment.min : value < segment.min ? max : value;
        }
    };

    //types a digit in a segment; returns true if the segment is complete and the selection should move on
    const typeDigit = (segment, digit) => {
        const max = maxOf(segment);
        let buffer = segment.buffer + digit;
        if (+buffer > max) {
            buffer = digit;
        }
        const number = +buffer;
        const complete = buffer.length >= segment.digits || number * 10 > max;
        if (complete || number >= segment.min) {
            segment.value = Math.max(number, segment.min);
        }
        segment.buffer = complete ? '' : buffer;
        return complete;
    };

    //types a letter in the AM/PM segment
    const typeLetter = (segment, letter) => {
        const index = segment.labels.findIndex(label => label.toLowerCase().startsWith(letter.toLowerCase()));
        const fallback = /^a/i.test(letter) ? 0 : /^p/i.test(letter) ? 1 : -1;
        const value = index >= 0 ? index : fallback;
        if (value >= 0) {
            segment.value = value;
            return true;
        }
        return false;
    };

    //assigns pasted text: an ISO value, or the numbers of the text in the order of the segments
    const paste = (text) => {
        text = text.trim();
        if (/^\d{4,}-/.test(text)) {
            setIsoValue(text);
        }
        else {
            const numbers = text.match(/\d+/g) ?? [];
            const numeric = segments.filter(segment => segment.kind !== 'ampm');
            if (numbers.length < numeric.length) {
                return;
            }
            numeric.forEach((segment, index) => { segment.value = Math.max(segment.min, Math.min(maxOf(segment), +numbers[index])); });
            const period = find('ampm');
            if (period) {
                const letter = text.replace(/[\d\s:,./-]/g, '');
                period.value = letter ? period.labels.findIndex(label => label.toLowerCase().startsWith(letter[0].toLowerCase())) : null;
                if (period.value < 0) period.value = null;
            }
        }
        edited();
    };

    //the events
    element.addEventListener('beforeinput', (event) => {
        event.preventDefault();
        const segment = segments[active];
        switch (event.inputType) {
            case 'insertText': {
                const text = event.data ?? '';
                if (/^\d$/.test(text) && segment.kind !== 'ampm') {
                    const complete = typeDigit(segment, text);
                    edited();
                    if (complete) {
                        select(active + 1);
                    }
                }
                else if (segment.kind === 'ampm' && /^\S$/.test(text)) {
                    if (typeLetter(segment, text)) {
                        edited();
                        select(active + 1);
                    }
                }
                break;
            }
            case 'insertFromPaste':
            case 'insertFromDrop':
                paste(event.data ?? event.dataTransfer?.getData('text') ?? '');
                break;
            case 'deleteContentBackward':
            case 'deleteContentForward':
            case 'deleteByCut':
            case 'deleteWordBackward':
            case 'deleteWordForward':
                if (segment.value !== null || segment.buffer) {
                    segment.value = null;
                    segment.buffer = '';
                    edited();
                }
                break;
        }
    });

    element.addEventListener('keydown', (event) => {
        if (event.ctrlKey || event.metaKey || event.altKey || element.readOnly) {
            return;
        }
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                step(segments[active], event.key === 'ArrowUp' ? 1 : -1);
                edited();
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
        const caret = element.selectionStart;
        const index = ranges.findIndex(([start, end]) => caret >= start && caret <= end);
        select(index >= 0 ? index : caret < ranges[0][0] ? 0 : segments.length - 1);
    });

    //selects the first segment when the field gets the focus from the keyboard; completes the typing in progress on blur
    element.addEventListener('focus', () => {
        if (!mouseDown) {
            select(0);
        }
    });
    element.addEventListener('blur', () => {
        segments[active].buffer = '';
        render();
    });

    //the interface of a native input
    Object.defineProperty(element, 'type', { configurable: true, enumerable: true, get: () => type, set: () => {} });
    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => getIsoValue(),
        set: (value) => {
            setIsoValue(value);
            render();
            updateValidity();
            lastValue = getIsoValue();
        }
    });

    element.autocomplete = 'off';
    element.spellcheck = false;
    element.inputMode = 'numeric';
    element.size = layout.map(item => item.segment ? display(item.segment) : item.literal).join('').length + 1;

    //load the value the element already has (properties are applied before this function is invoked), then show the label as shrunk
    const initialValue = textGetter.call(element);
    setIsoValue(initialValue);
    render();
    updateValidity();
    lastValue = getIsoValue();
    submitters.push(new WeakRef(element));
    if (element.label) {
        element.label = element.label;
    }
}
