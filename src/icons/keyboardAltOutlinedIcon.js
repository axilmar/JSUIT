import { initIcon } from "./icon.js";

//the url of the keyboard alt outlined svg; resolved relative to this module
const URL_KEYBOARDALTOUTLINED = new URL('../../assets/icons/keyboardAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardAltOutlinedIcon', url: URL_KEYBOARDALTOUTLINED }, ...properties);
}

/**
 * Creates a keyboard alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardAltOutlinedIcon(element, ...properties);
    return element;
}
