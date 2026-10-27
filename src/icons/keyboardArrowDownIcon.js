import { initIcon } from "./icon.js";

//the url of the keyboard arrow down svg; resolved relative to this module
const URL_KEYBOARDARROWDOWN = new URL('../../assets/icons/keyboardArrowDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard arrow down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardArrowDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardArrowDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardArrowDownIcon', url: URL_KEYBOARDARROWDOWN }, ...properties);
}

/**
 * Creates a keyboard arrow down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardArrowDownIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardArrowDownIcon(element, ...properties);
    return element;
}
