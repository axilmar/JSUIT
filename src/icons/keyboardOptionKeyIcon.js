import { initIcon } from "./icon.js";

//the url of the keyboard option key svg; resolved relative to this module
const URL_KEYBOARDOPTIONKEY = new URL('../../assets/icons/keyboardOptionKey.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard option key icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardOptionKey.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardOptionKeyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDOPTIONKEY }, ...properties);
}

/**
 * Creates a keyboard option key icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardOptionKeyIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardOptionKeyIcon(element, ...properties);
    return element;
}
