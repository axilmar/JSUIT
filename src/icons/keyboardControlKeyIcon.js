import { initIcon } from "./icon.js";

//the url of the keyboard control key svg; resolved relative to this module
const URL_KEYBOARDCONTROLKEY = new URL('../../assets/icons/keyboardControlKey.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard control key icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardControlKey.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardControlKeyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardControlKeyIcon', url: URL_KEYBOARDCONTROLKEY }, ...properties);
}

/**
 * Creates a keyboard control key icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardControlKeyIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardControlKeyIcon(element, ...properties);
    return element;
}
