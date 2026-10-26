import { initIcon } from "./icon.js";

//the url of the keyboard return svg; resolved relative to this module
const URL_KEYBOARDRETURN = new URL('../../assets/icons/keyboardReturn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard return icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardReturn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardReturnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDRETURN }, ...properties);
}

/**
 * Creates a keyboard return icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardReturnIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardReturnIcon(element, ...properties);
    return element;
}
