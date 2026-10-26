import { initIcon } from "./icon.js";

//the url of the calendar view day svg; resolved relative to this module
const URL_CALENDARVIEWDAY = new URL('../../assets/icons/calendarViewDay.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar view day icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarViewDay.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarViewDayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALENDARVIEWDAY }, ...properties);
}

/**
 * Creates a calendar view day icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarViewDayIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarViewDayIcon(element, ...properties);
    return element;
}
