import { initIcon } from "./icon.js";

//the url of the check mark svg; resolved relative to this module
const CHECK_MARK_URL = new URL('../../icons/check.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check icon.
 * 
 * It invokes the function `initIcon(element, ...properties)`.
 * 
 * The element displays the svg `icons/check.svg`; a `url` property overrides it.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: CHECK_MARK_URL }, ...properties);
}

/**
 * Creates a check icon.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const checkIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckIcon(element, ...properties);
    return element;
}
