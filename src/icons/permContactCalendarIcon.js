import { initIcon } from "./icon.js";

//the url of the perm contact calendar svg; resolved relative to this module
const URL_PERMCONTACTCALENDAR = new URL('../../assets/icons/permContactCalendar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm contact calendar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permContactCalendar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermContactCalendarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERMCONTACTCALENDAR }, ...properties);
}

/**
 * Creates a perm contact calendar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permContactCalendarIcon = (...properties) => {
    const element = document.createElement('div');
    initPermContactCalendarIcon(element, ...properties);
    return element;
}
