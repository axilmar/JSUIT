import { initIcon } from "./icon.js";

//the url of the keyboard double arrow left svg; resolved relative to this module
const URL_KEYBOARDDOUBLEARROWLEFT = new URL('../../assets/icons/keyboardDoubleArrowLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard double arrow left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardDoubleArrowLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardDoubleArrowLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardDoubleArrowLeftIcon', url: URL_KEYBOARDDOUBLEARROWLEFT }, ...properties);
}

/**
 * Creates a keyboard double arrow left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardDoubleArrowLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardDoubleArrowLeftIcon(element, ...properties);
    return element;
}
