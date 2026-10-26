import { initIcon } from "./icon.js";

//the url of the keyboard hide svg; resolved relative to this module
const URL_KEYBOARDHIDE = new URL('../../assets/icons/keyboardHide.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard hide icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardHide.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardHideIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDHIDE }, ...properties);
}

/**
 * Creates a keyboard hide icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardHideIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardHideIcon(element, ...properties);
    return element;
}
