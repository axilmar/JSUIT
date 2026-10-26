import { initIcon } from "./icon.js";

//the url of the calendar month svg; resolved relative to this module
const URL_CALENDARMONTH = new URL('../../assets/icons/calendarMonth.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar month icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarMonth.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarMonthIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALENDARMONTH }, ...properties);
}

/**
 * Creates a calendar month icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarMonthIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarMonthIcon(element, ...properties);
    return element;
}
