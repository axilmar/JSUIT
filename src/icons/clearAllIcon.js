import { initIcon } from "./icon.js";

//the url of the clear all svg; resolved relative to this module
const URL_CLEARALL = new URL('../../assets/icons/clearAll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a clear all icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/clearAll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClearAllIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLEARALL }, ...properties);
}

/**
 * Creates a clear all icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const clearAllIcon = (...properties) => {
    const element = document.createElement('div');
    initClearAllIcon(element, ...properties);
    return element;
}
