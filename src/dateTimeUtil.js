import { showDateTimePicker } from "./dateTimePicker.js";
import { adoptStyleSheet } from "./utility.js";

import dateTimePickerInputStyleSheet from './dateTimePickerInput.css' with { type: 'css' };

adoptStyleSheet(dateTimePickerInputStyleSheet);

//pads a number with a leading zero, to 2 digits
export const pad = (number) => String(number).padStart(2, '0');

//returns the iso week { year, week } of a date
export const getIsoWeek = (year, month, day) => {
    const date = new Date(year, month, day);
    date.setDate(date.getDate() - (date.getDay() + 6) % 7 + 3);     //the thursday of the week
    const isoYear = date.getFullYear();
    const firstThursday = new Date(isoYear, 0, 4);
    const week = 1 + Math.round(((date - firstThursday) / 864e5 - 3 + (firstThursday.getDay() + 6) % 7) / 7);
    return { year: isoYear, week };
};

//returns the date fields of the monday of an iso week
const getIsoWeekMonday = (isoYear, week) => {
    const january4 = new Date(isoYear, 0, 4);
    const monday = new Date(isoYear, 0, 4 - (january4.getDay() + 6) % 7 + (week - 1) * 7);
    return { year: monday.getFullYear(), month: monday.getMonth(), day: monday.getDate() };
};

//parses a value of the given input type into { year, month (0-11), day, hour, minute, second }, or returns null
export const parseValue = (type, text) => {
    text = text ?? '';
    let match;
    switch (type) {
        case 'time':
            return (match = /^(\d{2}):(\d{2})(?::(\d{2}))?/.exec(text)) && { year: 2000, month: 0, day: 1, hour: +match[1], minute: +match[2], second: +(match[3] ?? 0) };
        case 'month':
            return (match = /^(\d{4,})-(\d{2})/.exec(text)) && { year: +match[1], month: +match[2] - 1, day: 1, hour: 0, minute: 0, second: 0 };
        case 'week':
            return (match = /^(\d{4,})-W(\d{2})/.exec(text)) && { ...getIsoWeekMonday(+match[1], +match[2]), hour: 0, minute: 0, second: 0 };
        default:
            return (match = /^(\d{4,})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2}))?)?/.exec(text)) &&
                { year: +match[1], month: +match[2] - 1, day: +match[3], hour: +(match[4] ?? 0), minute: +(match[5] ?? 0), second: +(match[6] ?? 0) };
    }
};

//formats a value as the value of an input of the given type; the seconds are in the value of the types with a time if `seconds` is true
export const formatValue = (type, value, seconds = false) => {
    const year = String(value.year).padStart(4, '0');
    const date = `${year}-${pad(value.month + 1)}-${pad(value.day)}`;
    const time = `${pad(value.hour)}:${pad(value.minute)}${seconds ? ':' + pad(value.second ?? 0) : ''}`;
    switch (type) {
        case 'time': return time;
        case 'month': return `${year}-${pad(value.month + 1)}`;
        case 'week': {
            const isoWeek = getIsoWeek(value.year, value.month, value.day);
            return `${String(isoWeek.year).padStart(4, '0')}-W${pad(isoWeek.week)}`;
        }
        case 'datetime-local': return `${date}T${time}`;
        default: return date;
    }
};

//returns a number that orders values chronologically, ignoring what is finer than the granularity: 'year', 'month', 'week', 'day',
//'minute', 'second', or, for the times without a date, 'timeOfDay' (minutes) and 'timeOfDaySecond'
export const keyAt = (value, granularity) => {
    const dayKey = Math.round(Date.UTC(value.year, value.month, value.day) / 864e5);
    const second = value.second ?? 0;
    switch (granularity) {
        case 'year': return value.year;
        case 'month': return value.year * 12 + value.month;
        case 'week': return dayKey - (new Date(value.year, value.month, value.day).getDay() + 6) % 7;
        case 'day': return dayKey;
        case 'timeOfDay': return value.hour * 60 + value.minute;
        case 'timeOfDaySecond': return (value.hour * 60 + value.minute) * 60 + second;
        case 'second': return (dayKey * 1440 + value.hour * 60 + value.minute) * 60 + second;
        default: return dayKey * 1440 + value.hour * 60 + value.minute;
    }
};

//returns the granularity at which the values of an input type are compared: the day for 'date', the minute (or second) for 'datetime-local', etc.
export const getGranularity = (type, seconds) => {
    switch (type) {
        case 'date': return 'day';
        case 'month': return 'month';
        case 'week': return 'week';
        case 'time': return seconds ? 'timeOfDaySecond' : 'timeOfDay';
        default: return seconds ? 'second' : 'minute';
    }
};

//returns the current date and time, as the fields of a value
export const getNow = () => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth(), day: now.getDate(), hour: now.getHours(), minute: now.getMinutes(), second: now.getSeconds() };
};

//returns 1 if the value is after now, -1 if it is before now, and 0 if it is now, at the granularity
export const compareWithNow = (value, granularity) => Math.sign(keyAt(value, granularity) - keyAt(getNow(), granularity));

const nativeValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');

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
const createLayout = (type, hour12, seconds) => {
    const segment = (kind, digits, min, max, placeholder) => ({ segment: { kind, digits, min, max, placeholder, value: null, buffer: '' } });
    if (type === 'week') {
        return [{ literal: 'Week ' }, segment('week', 2, 1, 53, 'ww'), { literal: ', ' }, segment('weekYear', 4, 1, 9999, 'yyyy')];
    }

    const options = {
        date: { year: 'numeric', month: '2-digit', day: '2-digit' },
        'datetime-local': { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: hour12 ? 'h12' : 'h23' },
        time: { hour: '2-digit', minute: '2-digit', hourCycle: hour12 ? 'h12' : 'h23' },
        month: { year: 'numeric', month: '2-digit' }
    }[type];
    if (seconds && options.hour) {
        options.second = '2-digit';
    }
    const layout = [];
    const periods = [];

    for (const part of new Intl.DateTimeFormat(undefined, options).formatToParts(SAMPLE_DATE)) {
        switch (part.type) {
            case 'month': layout.push(segment('month', 2, 1, 12, 'mm')); break;
            case 'day': layout.push(segment('day', 2, 1, 31, 'dd')); break;
            case 'year': layout.push(segment('year', 4, 1, 9999, 'yyyy')); break;
            case 'hour': layout.push(hour12 ? segment('hour', 2, 1, 12, 'hh') : segment('hour', 2, 0, 23, 'hh')); break;
            case 'minute': layout.push(segment('minute', 2, 0, 59, 'mm')); break;
            case 'second': layout.push(segment('second', 2, 0, 59, 'ss')); break;
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
 * The element is a text input that shows the locale's format ('mm/dd/yyyy, HH:mm'; the order of the parts and the separators are the locale's); the user edits one segment at a time:
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
 * It must be invoked after `initInput`, because it wraps the element's 'value' property.
 *
 * For the types with a time ('datetime-local' and 'time'), the element gets the boolean property 'hour12' (default false, or the value that the
 * property had before this function was invoked): the time is a 24-hour time (hours 00 to 23, without AM/PM) if it is false, and a 12-hour time
 * (hours 01 to 12, with AM/PM) if it is true. The element also gets the boolean property 'seconds' (default false, or the value that the property had
 * before this function was invoked): if it is true, the time has a seconds segment, and the value has the seconds ('14:30:15'). Setting either
 * property creates the segments again, keeping the value if it is complete.
 *
 * All the types get the boolean properties 'futureEnabled' and 'pastEnabled' (default true, or the value that the property had before this function was invoked):
 * if one is false, a value after (futureEnabled) or before (pastEnabled) the current date and time is invalid, as if it were outside of `min` or `max`.
 * The values are compared with the current time at the granularity of the type: the day for 'date', the month for 'month', the week for 'week', the
 * minute (or the second, with 'seconds') for 'datetime-local' and 'time'; so the current day, month, week or minute is never in the future or in the past.
 *
 * @param {*} element the input element.
 * @param {string} type 'date', 'datetime-local', 'time', 'month' or 'week'.
 */
export const attachSegmentedInput = (element, type) => {
    console.assert(element instanceof HTMLInputElement);
    console.assert(['date', 'datetime-local', 'time', 'month', 'week'].includes(type));

    const state = {
        hour12: element.hour12 === true,
        seconds: element.seconds === true,
        futureEnabled: element.futureEnabled !== false,
        pastEnabled: element.pastEnabled !== false,
        apply: null,
        validate: null
    };
    if (type === 'datetime-local' || type === 'time') {
        defineStateProperty(element, state, 'hour12', 'apply');
        defineStateProperty(element, state, 'seconds', 'apply');
    }
    defineStateProperty(element, state, 'futureEnabled', 'validate');
    defineStateProperty(element, state, 'pastEnabled', 'validate');

    let hour12 = state.hour12;
    let seconds = state.seconds;
    let layout = [];
    let segments = [];
    const ranges = [];              //the [start, end) of each segment in the displayed text
    const textSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set ?? nativeValue.set;
    const textGetter = Object.getOwnPropertyDescriptor(element, 'value')?.get ?? nativeValue.get;
    let active = 0;                 //the index of the selected segment
    let mouseDown = false;
    let lastValue = '';

    const now = new Date();
    const find = (kind) => segments.find(segment => segment.kind === kind);

    //creates the segments for the current hour format
    const build = () => {
        hour12 = state.hour12;
        seconds = state.seconds;
        layout = createLayout(type, hour12, seconds);
        segments = layout.filter(item => item.segment).map(item => item.segment);
        ranges.length = 0;
        active = Math.min(active, segments.length - 1);
    };

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

    //keeps the day and week inside their month and year; not while the year is being typed, because its first digits are not the year yet
    const clamp = () => {
        if (find('year')?.buffer || find('weekYear')?.buffer) {
            return;
        }
        for (const kind of ['day', 'week']) {
            const segment = find(kind);
            if (segment && segment.value !== null && segment.value > maxOf(segment)) {
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
        const value = { year: get('year') ?? 2000, month: (get('month') ?? 1) - 1, day: get('day') ?? 1, hour: hour ?? 0, minute: get('minute') ?? 0, second: get('second') ?? 0 };
        if (value.day > daysInMonth(value.year, value.month + 1)) {
            return '';
        }
        return formatValue(type, value, seconds);
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
            set('second', value.second);
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
        else if (!state.futureEnabled && compareWithNow(parseValue(type, iso), getGranularity(type, seconds)) > 0) {
            message = 'Value must not be in the future.';
        }
        else if (!state.pastEnabled && compareWithNow(parseValue(type, iso), getGranularity(type, seconds)) < 0) {
            message = 'Value must not be in the past.';
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
            case 'second': return now.getSeconds();
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

    //shows the segments, and sizes the field for them
    const show = () => {
        render();
        updateValidity();
        lastValue = getIsoValue();
        element.size = layout.map(item => item.segment ? display(item.segment) : item.literal).join('').length + 1;
    };

    //the hour format changed: the segments are created again, and the value is kept if it is complete
    state.validate = updateValidity;
    state.apply = () => {
        const iso = getIsoValue();
        build();
        setIsoValue(iso);
        show();
    };

    element.autocomplete = 'off';
    element.spellcheck = false;
    element.inputMode = 'numeric';

    //load the value the element already has (properties are applied before this function is invoked), then show the label as shrunk
    const initialValue = textGetter.call(element);
    build();
    setIsoValue(initialValue);
    show();
    submitters.push(new WeakRef(element));
    if (element.label) {
        element.label = element.label;
    }
}

//defines a boolean property that is held in the state shared with the segmented field, which is notified through the function of the state with the given name
const defineStateProperty = (element, state, name, notification) => {
    Object.defineProperty(element, name, {
        configurable: true,
        enumerable: true,
        get: () => state[name],
        set: (value) => {
            value = !!value;
            if (value !== state[name]) {
                state[name] = value;
                state[notification]?.();
            }
        }
    });
};

const ICON_WIDTH = 44;      //width of the area at the right edge that holds the calendar icon

//returns true if the mouse event happened over the calendar icon
const isOverIcon = (element, event) => {
    return event.clientX >= element.getBoundingClientRect().right - ICON_WIDTH;
};

/**
 * Makes a segmented input of type 'date', 'datetime-local', 'time', 'month' or 'week' open the custom picker popup of `showDateTimePicker`
 * instead of the browser's own popup.
 * 
 * The element gets the class 'dateTimePickerInput', which hides the browser's calendar icon and draws MUI's calendar icon (or clock icon, for time)
 * at the right edge of the field. Clicking the icon, or pressing Alt+ArrowDown, opens the popup, which starts with the
 * element's value and respects its `min` and `max`; its time is shown as 12-hour or 24-hour time like the field: according to the element's
 * property `hour12` (24-hour time if it is false or the element has none); it also shows the seconds list if the element has a property `seconds` that is true. The popup does not allow selecting what
 * the element's properties `futureEnabled` and `pastEnabled` (true by default) exclude. When OK is pressed, the element's value is set and the
 * 'input' and 'change' events are dispatched, as when the user edits the value.
 * 
 * 
 * @param {*} element the input element.
 */
export const attachDateTimePicker = (element) => {
    console.assert(element instanceof HTMLInputElement);
    console.assert(['date', 'datetime-local', 'time', 'month', 'week'].includes(element.type));
    element.classList.add('dateTimePickerInput');
    element.classList.toggle('dateTimePickerInput-time', element.type === 'time');

    let close = null;

    const open = () => {
        close = showDateTimePicker({
            anchor: element,
            value: element.value,
            type: element.type,
            min: element.min,
            max: element.max,
            hour12: element.hour12 === true,
            seconds: element.seconds === true,
            futureEnabled: element.futureEnabled !== false,
            pastEnabled: element.pastEnabled !== false,
            onaccept: (value) => {
                element.value = value;
                element.dispatchEvent(new Event('input', { bubbles: true }));
                element.dispatchEvent(new Event('change', { bubbles: true }));
            },
            onclose: () => { close = null; }
        });
    };

    element.addEventListener('click', (event) => {
        if (element.disabled || element.readOnly || !isOverIcon(element, event)) {
            return;
        }
        event.preventDefault();
        if (close) {
            close();
        }
        else {
            open();
        }
    });

    element.addEventListener('keydown', (event) => {
        if (event.altKey && event.key === 'ArrowDown' && !element.disabled && !element.readOnly && !close) {
            event.preventDefault();
            open();
        }
    });

    element.addEventListener('mousemove', (event) => {
        element.style.cursor = !element.disabled && isOverIcon(element, event) ? 'pointer' : '';
    });
}
