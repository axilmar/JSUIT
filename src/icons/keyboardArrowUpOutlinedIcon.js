import { initIcon } from "./icon.js";

//the url of the keyboard arrow up outlined svg; resolved relative to this module
const URL_KEYBOARDARROWUPOUTLINED = new URL('../../assets/icons/keyboardArrowUpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard arrow up outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardArrowUpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardArrowUpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardArrowUpOutlinedIcon', url: URL_KEYBOARDARROWUPOUTLINED }, ...properties);
}

/**
 * Creates a keyboard arrow up outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardArrowUpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardArrowUpOutlinedIcon(element, ...properties);
    return element;
}
