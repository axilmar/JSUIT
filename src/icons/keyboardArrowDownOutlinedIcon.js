import { initIcon } from "./icon.js";

//the url of the keyboard arrow down outlined svg; resolved relative to this module
const URL_KEYBOARDARROWDOWNOUTLINED = new URL('../../assets/icons/keyboardArrowDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard arrow down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardArrowDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardArrowDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDARROWDOWNOUTLINED }, ...properties);
}

/**
 * Creates a keyboard arrow down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardArrowDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardArrowDownOutlinedIcon(element, ...properties);
    return element;
}
