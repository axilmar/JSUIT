import { initIcon } from "./icon.js";

//the url of the keyboard tab outlined svg; resolved relative to this module
const URL_KEYBOARDTABOUTLINED = new URL('../../assets/icons/keyboardTabOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard tab outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardTabOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardTabOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDTABOUTLINED }, ...properties);
}

/**
 * Creates a keyboard tab outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardTabOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardTabOutlinedIcon(element, ...properties);
    return element;
}
