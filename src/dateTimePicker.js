import { button } from "./button.js";
import { adoptStyleSheet } from "./utility.js";

import dateTimePickerStyleSheet from './dateTimePicker.css' with { type: 'css' };

adoptStyleSheet(dateTimePickerStyleSheet);

const CHEVRON_LEFT = "<svg viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'/></svg>";
const CHEVRON_RIGHT = "<svg viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/></svg>";
const ARROW_DROP_DOWN = "<svg viewBox='0 0 24 24'><path d='m7 10 5 5 5-5z'/></svg>";

const MIN_YEAR = 1900;
const MAX_YEAR = 2099;

const pad = (number) => String(number).padStart(2, '0');

const monthYearFormat = new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' });
const monthFormat = new Intl.DateTimeFormat(undefined, { month: 'short' });
const weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: 'narrow' });
const hour12 = new Intl.DateTimeFormat(undefined, { hour: 'numeric' }).resolvedOptions().hour12 === true;

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

//parses a value of the given input type into { year, month (0-11), day, hour, minute }, or returns null
export const parseValue = (type, text) => {
    text = text ?? '';
    let match;
    switch (type) {
        case 'time':
            return (match = /^(\d{2}):(\d{2})/.exec(text)) && { year: 2000, month: 0, day: 1, hour: +match[1], minute: +match[2] };
        case 'month':
            return (match = /^(\d{4,})-(\d{2})/.exec(text)) && { year: +match[1], month: +match[2] - 1, day: 1, hour: 0, minute: 0 };
        case 'week':
            return (match = /^(\d{4,})-W(\d{2})/.exec(text)) && { ...getIsoWeekMonday(+match[1], +match[2]), hour: 0, minute: 0 };
        default:
            return (match = /^(\d{4,})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(text)) &&
                { year: +match[1], month: +match[2] - 1, day: +match[3], hour: +(match[4] ?? 0), minute: +(match[5] ?? 0) };
    }
};

//formats a value as the value of an input of the given type
export const formatValue = (type, value) => {
    const year = String(value.year).padStart(4, '0');
    const date = `${year}-${pad(value.month + 1)}-${pad(value.day)}`;
    switch (type) {
        case 'time': return `${pad(value.hour)}:${pad(value.minute)}`;
        case 'month': return `${year}-${pad(value.month + 1)}`;
        case 'week': {
            const isoWeek = getIsoWeek(value.year, value.month, value.day);
            return `${String(isoWeek.year).padStart(4, '0')}-W${pad(isoWeek.week)}`;
        }
        case 'datetime-local': return `${date}T${pad(value.hour)}:${pad(value.minute)}`;
        default: return date;
    }
};

//returns a number that orders values chronologically, ignoring what is finer than the granularity
const keyAt = (value, granularity) => {
    const dayKey = Math.round(Date.UTC(value.year, value.month, value.day) / 864e5);
    switch (granularity) {
        case 'year': return value.year;
        case 'month': return value.year * 12 + value.month;
        case 'week': return dayKey - (new Date(value.year, value.month, value.day).getDay() + 6) % 7;
        case 'day': return dayKey;
        case 'timeOfDay': return value.hour * 60 + value.minute;
        default: return dayKey * 1440 + value.hour * 60 + value.minute;
    }
};

//creates an element with a class and optional text
const create = (tag, className, text) => {
    const element = document.createElement(tag);
    element.className = className;
    if (text !== undefined) {
        element.textContent = text;
    }
    return element;
};

//creates a button element with a class, label and click handler
const createButton = (className, label, onclick) => {
    const button = create('button', className);
    button.type = 'button';
    if (label) {
        button.setAttribute('aria-label', label);
    }
    button.addEventListener('click', onclick);
    return button;
};

/**
 * Shows a picker popup, looking like the desktop pickers of MUI X.
 *
 * Depending on the input type, the popup contains:
 *  - 'date': the calendar (month header with previous/next buttons, weekday row, day grid).
 *  - 'datetime-local': the calendar, and scrolling lists for the hours, minutes and (for 12-hour locales) AM/PM.
 *  - 'time': only the lists for the time.
 *  - 'month': a grid of months for the shown year.
 *  - 'week': the calendar starting on Monday; selecting a day selects (highlights) its whole iso week.
 *
 * Clicking the title of the calendar shows a grid of years, as in MUI; selecting a year goes back to the calendar.
 * Cancel and OK buttons follow.
 *
 * The popup is a paper with elevation 8, placed below the anchor element (above, if there is no room below).
 * It closes when Cancel or OK is pressed, when Escape is pressed, or when the user clicks outside of it.
 *
 * @param {Object} options the options:
 *  - `anchor`: the element the popup is placed against.
 *  - `type`: the input type: 'date', 'datetime-local', 'time', 'month' or 'week'.
 *  - `value`: the initial value, in the format of the input type; empty or invalid values start at the current time.
 *  - `min`, `max`: the limits, in the format of the input type; what is outside of them cannot be selected.
 *  - `onaccept(value)`: called with the selected value (in the format of the input type) when OK is pressed.
 *  - `onclose()`: called after the popup closed, however it closed.
 *
 * @return {Function} a function that closes the popup.
 */
export const showDateTimePicker = ({ anchor, type = 'date', value, min, max, onaccept, onclose }) => {
    const withDate = type !== 'time';
    const withTime = type === 'datetime-local' || type === 'time';
    const minValue = parseValue(type, min);
    const maxValue = parseValue(type, max);
    const initial = parseValue(type, value);
    const now = new Date();
    const today = { year: now.getFullYear(), month: now.getMonth(), day: now.getDate(), hour: now.getHours(), minute: now.getMinutes() };

    //the draft value, the month or year being shown, and the current view: 'days', 'months' or 'years'
    const draft = { ...(initial ?? today) };
    if (!initial && !withTime) {
        draft.hour = draft.minute = 0;
    }
    if (!initial && type === 'month') {
        draft.day = 1;
    }
    let hasDate = initial !== null;
    let viewYear = draft.year;
    let viewMonth = draft.month;
    let view = type === 'month' ? 'months' : 'days';

    const isOutOfRange = (candidate, granularity) =>
        (minValue && keyAt(candidate, granularity) < keyAt(minValue, granularity)) ||
        (maxValue && keyAt(candidate, granularity) > keyAt(maxValue, granularity));

    //build the popup
    const paper = create('div', 'dateTimePicker');
    paper.setAttribute('role', 'dialog');
    paper.tabIndex = -1;

    const body = create('div', 'dateTimePicker-body');
    const lists = [];

    let calendar = null, title = null, previous = null, next = null, days = null, grid = null, weekdays = null;
    if (withDate) {
        calendar = create('div', 'dateTimePicker-calendar');
        const header = create('div', 'dateTimePicker-header');
        title = create('button', 'dateTimePicker-title');
        title.type = 'button';
        title.setAttribute('aria-live', 'polite');
        title.addEventListener('click', () => {
            view = view === 'years' ? (type === 'month' ? 'months' : 'days') : 'years';
            showCalendar();
        });
        previous = createButton('dateTimePicker-nav', 'Previous', () => navigate(-1));
        next = createButton('dateTimePicker-nav', 'Next', () => navigate(1));
        previous.innerHTML = CHEVRON_LEFT;
        next.innerHTML = CHEVRON_RIGHT;
        header.append(title, previous, next);

        weekdays = create('div', 'dateTimePicker-weekdays');
        const firstWeekday = type === 'week' ? 1 : 0;
        for (let i = 0; i < 7; i++) {
            weekdays.append(create('span', 'dateTimePicker-weekday', weekdayFormat.format(new Date(2023, 0, 1 + firstWeekday + i))));    //2023-01-01 is a Sunday
        }

        days = create('div', 'dateTimePicker-days');
        grid = create('div', 'dateTimePicker-grid');
        calendar.append(header, weekdays, days, grid);
        body.append(calendar);
    }

    if (withTime) {
        for (let i = 0; i < (hour12 ? 3 : 2); i++) {
            lists.push(create('div', 'dateTimePicker-list'));
        }
        body.append(...lists);
    }

    const actions = create('div', 'dateTimePicker-actions');
    let close;
    actions.append(
        button({ variant: "text", onclick: () => close() }, 'Cancel'),
        button({ variant: "text", onclick: () => { onaccept?.(formatValue(type, draft)); close(); } }, 'OK')
    );
    paper.append(body, actions);

    //the previous/next buttons: the month in the days view, the year in the months view
    const navigate = (direction) => {
        if (view === 'months') {
            viewYear += direction;
        }
        else {
            const date = new Date(viewYear, viewMonth + direction, 1);
            viewYear = date.getFullYear();
            viewMonth = date.getMonth();
        }
        showCalendar();
    };

    //selects a date (or a month) from the calendar
    const select = (year, month, day) => {
        draft.year = year;
        draft.month = month;
        draft.day = day;
        hasDate = true;
        showCalendar();
        showTime();
    };

    //renders the calendar for the current view
    const showCalendar = () => {
        if (!withDate) {
            return;
        }
        days.replaceChildren();
        grid.replaceChildren();
        days.hidden = weekdays.hidden = view !== 'days';
        grid.hidden = view === 'days';
        previous.style.visibility = next.style.visibility = view === 'years' ? 'hidden' : '';
        title.innerHTML = '';
        title.append(view === 'days' ? monthYearFormat.format(new Date(viewYear, viewMonth, 1)) : String(viewYear));
        title.insertAdjacentHTML('beforeend', ARROW_DROP_DOWN);
        grid.className = 'dateTimePicker-grid dateTimePicker-grid-' + view;

        if (view === 'days') {
            showDays();
        }
        else if (view === 'months') {
            for (let month = 0; month < 12; month++) {
                const button = createButton('dateTimePicker-cell', null, () => select(viewYear, month, 1));
                button.textContent = monthFormat.format(new Date(2023, month, 1));
                button.disabled = !!isOutOfRange({ year: viewYear, month, day: 1, hour: 0, minute: 0 }, 'month');
                button.classList.toggle('dateTimePicker-selected', hasDate && draft.year === viewYear && draft.month === month);
                button.classList.toggle('dateTimePicker-today', today.year === viewYear && today.month === month);
                grid.append(button);
            }
        }
        else {
            const firstYear = Math.min(MIN_YEAR, viewYear);
            const lastYear = Math.max(MAX_YEAR, viewYear);
            for (let year = firstYear; year <= lastYear; year++) {
                const button = createButton('dateTimePicker-cell', null, () => {
                    viewYear = year;
                    view = type === 'month' ? 'months' : 'days';
                    showCalendar();
                });
                button.textContent = year;
                button.disabled = !!isOutOfRange({ year, month: 0, day: 1, hour: 0, minute: 0 }, 'year');
                button.classList.toggle('dateTimePicker-selected', draft.year === year && (hasDate || type !== 'month'));
                button.classList.toggle('dateTimePicker-today', today.year === year);
                grid.append(button);
            }
            const selected = grid.querySelector('.dateTimePicker-selected') ?? grid.querySelector('.dateTimePicker-today');
            if (selected) {
                grid.scrollTop = selected.offsetTop - (grid.clientHeight - selected.offsetHeight) / 2;
            }
        }
    };

    //renders the day grid for the shown month
    const showDays = () => {
        const isWeek = type === 'week';
        const first = new Date(viewYear, viewMonth, 1);
        const offset = isWeek ? (first.getDay() + 6) % 7 : first.getDay();
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        const selectedWeek = keyAt(draft, 'week');

        for (let i = 0; i < offset; i++) {
            days.append(create('span', 'dateTimePicker-empty'));
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const candidate = { year: viewYear, month: viewMonth, day, hour: draft.hour, minute: draft.minute };
            const column = (offset + day - 1) % 7;
            const button = createButton('dateTimePicker-day', null, () => select(viewYear, viewMonth, day));
            button.textContent = day;
            button.disabled = !!isOutOfRange(candidate, isWeek ? 'week' : 'day');
            button.classList.toggle('dateTimePicker-today', today.year === viewYear && today.month === viewMonth && today.day === day);

            const selected = hasDate && (isWeek
                ? keyAt(candidate, 'week') === selectedWeek
                : draft.year === viewYear && draft.month === viewMonth && draft.day === day);
            button.classList.toggle('dateTimePicker-selected', selected);
            if (isWeek) {
                button.classList.toggle('dateTimePicker-week-start', selected && (column === 0 || day === 1));
                button.classList.toggle('dateTimePicker-week-end', selected && (column === 6 || day === daysInMonth));
            }
            if (selected) {
                button.setAttribute('aria-current', 'date');
            }
            days.append(button);
        }
    };

    //renders the lists of the time: hours, minutes, and AM/PM
    const showTime = () => {
        if (!withTime) {
            return;
        }
        const fill = (list, items) => {
            const scrollTop = list.scrollTop;
            list.replaceChildren();
            for (const item of items) {
                const button = createButton('dateTimePicker-item', null, () => {
                    Object.assign(draft, item.change);
                    hasDate = true;
                    showCalendar();
                    showTime();
                });
                button.textContent = item.label;
                button.classList.toggle('dateTimePicker-selected', item.selected);
                button.disabled = !!isOutOfRange({ ...draft, ...item.change }, type === 'time' ? 'timeOfDay' : 'minute');
                list.append(button);
            }
            list.scrollTop = scrollTop;
        };

        const pm = draft.hour >= 12 ? 12 : 0;
        const hours = [];
        for (let i = 0; i < (hour12 ? 12 : 24); i++) {
            hours.push(hour12
                ? { label: pad(i === 0 ? 12 : i), selected: draft.hour % 12 === i, change: { hour: i + pm } }
                : { label: pad(i), selected: draft.hour === i, change: { hour: i } });
        }
        const minutes = [];
        for (let i = 0; i < 60; i++) {
            minutes.push({ label: pad(i), selected: draft.minute === i, change: { minute: i } });
        }
        fill(lists[0], hours);
        fill(lists[1], minutes);
        if (hour12) {
            fill(lists[2], [
                { label: 'AM', selected: pm === 0, change: { hour: draft.hour % 12 } },
                { label: 'PM', selected: pm === 12, change: { hour: draft.hour % 12 + 12 } }
            ]);
        }
    };

    //closes the popup
    const pointerDownListener = (event) => {
        if (!paper.contains(event.target) && event.target !== anchor) {
            close();
        }
    };
    const keyDownListener = (event) => {
        if (event.key === 'Escape') {
            event.stopPropagation();
            close();
        }
    };
    close = () => {
        if (!paper.isConnected) {
            return;
        }
        document.removeEventListener('pointerdown', pointerDownListener, true);
        document.removeEventListener('keydown', keyDownListener, true);
        window.removeEventListener('resize', close);
        paper.remove();
        anchor.focus?.({ preventScroll: true });
        onclose?.();
    };

    document.body.append(paper);
    showCalendar();
    showTime();

    //place the popup below the anchor, or above it if there is no room; keep it inside the viewport
    const anchorRect = anchor.getBoundingClientRect();
    const paperRect = paper.getBoundingClientRect();
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const top = spaceBelow >= paperRect.height + 8 || anchorRect.top < paperRect.height + 8
        ? anchorRect.bottom + 4
        : anchorRect.top - paperRect.height - 4;
    paper.style.top = Math.max(8, top) + 'px';
    paper.style.left = Math.max(8, Math.min(anchorRect.left, window.innerWidth - paperRect.width - 8)) + 'px';

    //bring the selected hour, minute and AM/PM to the middle of their lists
    for (const list of lists) {
        const selected = list.querySelector('.dateTimePicker-selected');
        if (selected) {
            list.scrollTop = selected.offsetTop - (list.clientHeight - selected.offsetHeight) / 2;
        }
    }

    document.addEventListener('pointerdown', pointerDownListener, true);
    document.addEventListener('keydown', keyDownListener, true);
    window.addEventListener('resize', close);
    paper.focus({ preventScroll: true });

    return close;
}
