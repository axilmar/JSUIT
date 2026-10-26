import { initIcon } from "./icon.js";

//the url of the keyboard capslock outlined svg; resolved relative to this module
const URL_KEYBOARDCAPSLOCKOUTLINED = new URL('../../assets/icons/keyboardCapslockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard capslock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardCapslockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardCapslockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDCAPSLOCKOUTLINED }, ...properties);
}

/**
 * Creates a keyboard capslock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardCapslockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardCapslockOutlinedIcon(element, ...properties);
    return element;
}
