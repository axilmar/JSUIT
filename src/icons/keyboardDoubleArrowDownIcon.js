import { initIcon } from "./icon.js";

//the url of the keyboard double arrow down svg; resolved relative to this module
const URL_KEYBOARDDOUBLEARROWDOWN = new URL('../../assets/icons/keyboardDoubleArrowDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard double arrow down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardDoubleArrowDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardDoubleArrowDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardDoubleArrowDownIcon', url: URL_KEYBOARDDOUBLEARROWDOWN }, ...properties);
}

/**
 * Creates a keyboard double arrow down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardDoubleArrowDownIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardDoubleArrowDownIcon(element, ...properties);
    return element;
}
