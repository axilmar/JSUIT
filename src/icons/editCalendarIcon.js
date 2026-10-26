import { initIcon } from "./icon.js";

//the url of the edit calendar svg; resolved relative to this module
const URL_EDITCALENDAR = new URL('../../assets/icons/editCalendar.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit calendar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editCalendar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditCalendarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITCALENDAR }, ...properties);
}

/**
 * Creates an edit calendar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editCalendarIcon = (...properties) => {
    const element = document.createElement('div');
    initEditCalendarIcon(element, ...properties);
    return element;
}
