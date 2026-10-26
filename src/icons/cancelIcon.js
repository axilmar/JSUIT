import { initIcon } from "./icon.js";

//the url of the cancel svg; resolved relative to this module
const URL_CANCEL = new URL('../../assets/icons/cancel.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cancel icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cancel.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCancelIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CANCEL }, ...properties);
}

/**
 * Creates a cancel icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cancelIcon = (...properties) => {
    const element = document.createElement('div');
    initCancelIcon(element, ...properties);
    return element;
}
