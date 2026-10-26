import { initIcon } from "./icon.js";

//the url of the error svg; resolved relative to this module
const URL_ERROR = new URL('../../assets/icons/error.svg', import.meta.url).href;

/**
 * Initializes an icon element as an error icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/error.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initErrorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ERROR }, ...properties);
}

/**
 * Creates an error icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const errorIcon = (...properties) => {
    const element = document.createElement('div');
    initErrorIcon(element, ...properties);
    return element;
}
