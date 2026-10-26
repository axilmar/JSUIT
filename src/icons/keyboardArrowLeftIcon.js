import { initIcon } from "./icon.js";

//the url of the keyboard arrow left svg; resolved relative to this module
const URL_KEYBOARDARROWLEFT = new URL('../../assets/icons/keyboardArrowLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard arrow left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardArrowLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardArrowLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDARROWLEFT }, ...properties);
}

/**
 * Creates a keyboard arrow left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardArrowLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardArrowLeftIcon(element, ...properties);
    return element;
}
