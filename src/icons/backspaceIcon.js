import { initIcon } from "./icon.js";

//the url of the backspace svg; resolved relative to this module
const URL_BACKSPACE = new URL('../../assets/icons/backspace.svg', import.meta.url).href;

/**
 * Initializes an icon element as a backspace icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backspace.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackspaceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BACKSPACE }, ...properties);
}

/**
 * Creates a backspace icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backspaceIcon = (...properties) => {
    const element = document.createElement('div');
    initBackspaceIcon(element, ...properties);
    return element;
}
