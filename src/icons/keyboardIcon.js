import { initIcon } from "./icon.js";

//the url of the keyboard svg; resolved relative to this module
const URL_KEYBOARD = new URL('../../assets/icons/keyboard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardIcon', url: URL_KEYBOARD }, ...properties);
}

/**
 * Creates a keyboard icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardIcon(element, ...properties);
    return element;
}
