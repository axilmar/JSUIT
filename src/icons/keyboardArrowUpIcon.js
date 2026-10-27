import { initIcon } from "./icon.js";

//the url of the keyboard arrow up svg; resolved relative to this module
const URL_KEYBOARDARROWUP = new URL('../../assets/icons/keyboardArrowUp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard arrow up icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardArrowUp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardArrowUpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardArrowUpIcon', url: URL_KEYBOARDARROWUP }, ...properties);
}

/**
 * Creates a keyboard arrow up icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardArrowUpIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardArrowUpIcon(element, ...properties);
    return element;
}
