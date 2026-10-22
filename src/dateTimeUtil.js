import { showDateTimePicker } from "./dateTimePicker.js";
import { attachSegmentedEditor } from "./segmentedInputUtil.js";
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

const SAMPLE_DATE = new Date(2000, 0, 15, 13, 5);   //any date and time with a 2-digit PM hour, to get the layout of the locale

const daysInMonth = (year, month) => new Date(year ?? 2000, month ?? 1, 0).getDate();     //month is 1-12

const weeksInYear = (year) => getIsoWeek(year, 11, 28).week;                              //december 28th is always in the last week

//returns the AM and PM labels of the locale
const getPeriodLabels = () => [1, 13].map(hour => {
    const label = new Intl.DateTimeFormat(undefined, { hour: 'numeric', hour12: true }).formatToParts(new Date(2000, 0, 15, hour)).find(part => part.type === 'dayPeriod');
    return label?.value ?? (hour < 12 ? 'AM' : 'PM');
});

//creates the segments and literals of the type, as an array of { literal } and { segment } objects; the functions create the segments
const createLayout = (type, hour12, seconds, createNumber, createPeriod) => {
    if (type === 'week') {
        return [{ literal: 'Week ' }, { segment: createNumber('week', 2, 1, 53, 'ww') }, { literal: ', ' }, { segment: createNumber('weekYear', 4, 1, 9999, 'yyyy') }];
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

    for (const part of new Intl.DateTimeFormat(undefined, options).formatToParts(SAMPLE_DATE)) {
        switch (part.type) {
            case 'month': layout.push({ segment: createNumber('month', 2, 1, 12, 'mm') }); break;
            case 'day': layout.push({ segment: createNumber('day', 2, 1, 31, 'dd') }); break;
            case 'year': layout.push({ segment: createNumber('year', 4, 1, 9999, 'yyyy') }); break;
            case 'hour': layout.push({ segment: hour12 ? createNumber('hour', 2, 1, 12, 'hh') : createNumber('hour', 2, 0, 23, 'hh') }); break;
            case 'minute': layout.push({ segment: createNumber('minute', 2, 0, 59, 'mm') }); break;
            case 'second': layout.push({ segment: createNumber('second', 2, 0, 59, 'ss') }); break;
            case 'dayPeriod': layout.push({ segment: createPeriod() }); break;
            case 'literal': layout.push({ literal: part.value }); break;
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
 * ArrowLeft, ArrowRight and Tab move between segments, Backspace and Delete clear the segment. The editing is done by the segmented input
 * engine (see `attachSegmentedEditor` in segmentedInputUtil.js).
 *
 * The digits that the user types are never changed: a month 13, or a day 30 in February, is accepted, and the segment is shown in the error
 * color (and the border and the label of the input too, as the input is invalid), so that the user sees what to correct. The value of the
 * input is the empty string while a segment is out of range.
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
    let segments = [];

    const now = new Date();
    const find = (kind) => segments.find(segment => segment.kind === kind);

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
    const stepSegment = (segment, direction) => {
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

    //types a digit in a segment; returns true if the segment is complete and the selection should move on. The value is what was typed, even if
    //it is out of the range of the segment, so that the user sees the error (the segment is shown in the error color) and corrects it.
    const typeDigit = (segment, digit) => {
        const max = maxOf(segment);
        const buffer = segment.buffer + digit;
        const number = +buffer;
        const complete = buffer.length >= segment.digits || number * 10 > max;
        segment.value = number;
        segment.buffer = complete ? '' : buffer;
        return complete;
    };

    //true if the value of a segment with a number is out of its range
    const isOutOfRange = (segment) => segment.value !== null && (segment.value < segment.min || segment.value > maxOf(segment));

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

    //creates a segment with a number: the year, month, day, hour, minute, second, week or week year
    const createNumber = (kind, digits, min, max, placeholder) => ({
        kind, digits, min, max, placeholder, value: null, buffer: '',
        text() {
            if (this.buffer) {
                return this.buffer.padStart(this.digits, '0');
            }
            return this.value === null ? this.placeholder : String(this.value).padStart(this.digits, '0');
        },
        isEmpty() { return this.value === null && !this.buffer; },
        clear() { this.value = null; this.buffer = ''; },
        endTyping() { this.buffer = ''; },
        type(char) { return /^\d$/.test(char) ? typeDigit(this, char) : null; },
        step(direction) { stepSegment(this, direction); },
        isError() { return !this.buffer && isOutOfRange(this); }
    });

    //creates the AM/PM segment
    const createPeriod = () => {
        const labels = getPeriodLabels();
        const digits = Math.max(...labels.map(label => label.length));
        return {
            kind: 'ampm', digits, min: 0, max: 1, placeholder: '-'.repeat(digits), labels, value: null, buffer: '',
            text() { return (this.value === null ? this.placeholder : this.labels[this.value]).padEnd(this.digits); },
            isEmpty() { return this.value === null; },
            clear() { this.value = null; },
            endTyping() { },
            type(char) { return /^\S$/.test(char) && typeLetter(this, char) ? true : null; },
            step(direction) { stepSegment(this, direction); }
        };
    };

    //creates the layout, for the current hour format
    const build = () => {
        hour12 = state.hour12;
        seconds = state.seconds;
        const layout = createLayout(type, hour12, seconds, createNumber, createPeriod);
        segments = layout.filter(item => item.segment).map(item => item.segment);
        return layout;
    };

    //returns the ISO value of the segments, or '' if they are incomplete or not a date
    const getIsoValue = () => {
        if (segments.some(segment => segment.value === null || (segment.kind !== 'ampm' && isOutOfRange(segment)))) {
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
            segment.clear();
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

    //returns the message of why the value is not valid, from the segments, min, max, required, futureEnabled and pastEnabled
    const getValidationMessage = () => {
        const filled = segments.filter(segment => segment.value !== null).length;
        const iso = getIsoValue();
        const min = element.min?.slice(0, iso.length || undefined);
        const max = element.max?.slice(0, iso.length || undefined);
        if (filled === 0) {
            return element.required ? 'Please fill out this field.' : '';
        }
        if (filled < segments.length) {
            return 'Please enter a complete value.';
        }
        if (!iso) {
            return 'Please enter a valid value.';
        }
        if (min && iso < min) {
            return `Value must be ${element.min} or later.`;
        }
        if (max && iso > max) {
            return `Value must be ${element.max} or earlier.`;
        }
        if (!state.futureEnabled && compareWithNow(parseValue(type, iso), getGranularity(type, seconds)) > 0) {
            return 'Value must not be in the future.';
        }
        if (!state.pastEnabled && compareWithNow(parseValue(type, iso), getGranularity(type, seconds)) < 0) {
            return 'Value must not be in the past.';
        }
        return '';
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
                return false;
            }
            numeric.forEach((segment, index) => { segment.value = +numbers[index]; });
            const period = find('ampm');
            if (period) {
                const letter = text.replace(/[\d\s:,./-]/g, '');
                period.value = letter ? period.labels.findIndex(label => label.toLowerCase().startsWith(letter[0].toLowerCase())) : null;
                if (period.value < 0) period.value = null;
            }
        }
        return true;
    };

    const editor = attachSegmentedEditor(element, {
        type,
        inputMode: 'numeric',
        build,
        getValue: getIsoValue,
        setValue: setIsoValue,
        validate: getValidationMessage,
        paste
    });
    state.validate = editor.validate;
    state.apply = editor.rebuild;
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
