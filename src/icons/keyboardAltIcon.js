import { initIcon } from "./icon.js";

//the url of the keyboard alt svg; resolved relative to this module
const URL_KEYBOARDALT = new URL('../../assets/icons/keyboardAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardAltIcon', url: URL_KEYBOARDALT }, ...properties);
}

/**
 * Creates a keyboard alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardAltIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardAltIcon(element, ...properties);
    return element;
}
