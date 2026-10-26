import { initIcon } from "./icon.js";

//the url of the keyboard double arrow up outlined svg; resolved relative to this module
const URL_KEYBOARDDOUBLEARROWUPOUTLINED = new URL('../../assets/icons/keyboardDoubleArrowUpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard double arrow up outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardDoubleArrowUpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardDoubleArrowUpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDDOUBLEARROWUPOUTLINED }, ...properties);
}

/**
 * Creates a keyboard double arrow up outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardDoubleArrowUpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardDoubleArrowUpOutlinedIcon(element, ...properties);
    return element;
}
