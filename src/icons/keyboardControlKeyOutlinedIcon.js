import { initIcon } from "./icon.js";

//the url of the keyboard control key outlined svg; resolved relative to this module
const URL_KEYBOARDCONTROLKEYOUTLINED = new URL('../../assets/icons/keyboardControlKeyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard control key outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardControlKeyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardControlKeyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDCONTROLKEYOUTLINED }, ...properties);
}

/**
 * Creates a keyboard control key outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardControlKeyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardControlKeyOutlinedIcon(element, ...properties);
    return element;
}
