import { initIcon } from "./icon.js";

//the url of the calendar today svg; resolved relative to this module
const URL_CALENDARTODAY = new URL('../../assets/icons/calendarToday.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar today icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarToday.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarTodayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALENDARTODAY }, ...properties);
}

/**
 * Creates a calendar today icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarTodayIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarTodayIcon(element, ...properties);
    return element;
}
