import { initIcon } from "./icon.js";

//the url of the time to leave svg; resolved relative to this module
const URL_TIMETOLEAVE = new URL('../../assets/icons/timeToLeave.svg', import.meta.url).href;

/**
 * Initializes an icon element as a time to leave icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timeToLeave.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimeToLeaveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TIMETOLEAVE }, ...properties);
}

/**
 * Creates a time to leave icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timeToLeaveIcon = (...properties) => {
    const element = document.createElement('div');
    initTimeToLeaveIcon(element, ...properties);
    return element;
}
