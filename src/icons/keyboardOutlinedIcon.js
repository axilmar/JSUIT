import { initIcon } from "./icon.js";

//the url of the keyboard outlined svg; resolved relative to this module
const URL_KEYBOARDOUTLINED = new URL('../../assets/icons/keyboardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardOutlinedIcon', url: URL_KEYBOARDOUTLINED }, ...properties);
}

/**
 * Creates a keyboard outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardOutlinedIcon(element, ...properties);
    return element;
}
