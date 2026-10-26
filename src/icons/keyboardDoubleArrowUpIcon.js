import { initIcon } from "./icon.js";

//the url of the keyboard double arrow up svg; resolved relative to this module
const URL_KEYBOARDDOUBLEARROWUP = new URL('../../assets/icons/keyboardDoubleArrowUp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard double arrow up icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardDoubleArrowUp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardDoubleArrowUpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDDOUBLEARROWUP }, ...properties);
}

/**
 * Creates a keyboard double arrow up icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardDoubleArrowUpIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardDoubleArrowUpIcon(element, ...properties);
    return element;
}
