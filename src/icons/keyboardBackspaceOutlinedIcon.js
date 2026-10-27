import { initIcon } from "./icon.js";

//the url of the keyboard backspace outlined svg; resolved relative to this module
const URL_KEYBOARDBACKSPACEOUTLINED = new URL('../../assets/icons/keyboardBackspaceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard backspace outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardBackspaceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardBackspaceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardBackspaceOutlinedIcon', url: URL_KEYBOARDBACKSPACEOUTLINED }, ...properties);
}

/**
 * Creates a keyboard backspace outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardBackspaceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardBackspaceOutlinedIcon(element, ...properties);
    return element;
}
