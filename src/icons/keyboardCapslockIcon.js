import { initIcon } from "./icon.js";

//the url of the keyboard capslock svg; resolved relative to this module
const URL_KEYBOARDCAPSLOCK = new URL('../../assets/icons/keyboardCapslock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard capslock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardCapslock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardCapslockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDCAPSLOCK }, ...properties);
}

/**
 * Creates a keyboard capslock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardCapslockIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardCapslockIcon(element, ...properties);
    return element;
}
