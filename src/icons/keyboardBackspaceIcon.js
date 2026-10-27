import { initIcon } from "./icon.js";

//the url of the keyboard backspace svg; resolved relative to this module
const URL_KEYBOARDBACKSPACE = new URL('../../assets/icons/keyboardBackspace.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard backspace icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardBackspace.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardBackspaceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardBackspaceIcon', url: URL_KEYBOARDBACKSPACE }, ...properties);
}

/**
 * Creates a keyboard backspace icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardBackspaceIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardBackspaceIcon(element, ...properties);
    return element;
}
