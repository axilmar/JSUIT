import { initIcon } from "./icon.js";

//the url of the calendar view week svg; resolved relative to this module
const URL_CALENDARVIEWWEEK = new URL('../../assets/icons/calendarViewWeek.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar view week icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarViewWeek.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarViewWeekIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALENDARVIEWWEEK }, ...properties);
}

/**
 * Creates a calendar view week icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarViewWeekIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarViewWeekIcon(element, ...properties);
    return element;
}
