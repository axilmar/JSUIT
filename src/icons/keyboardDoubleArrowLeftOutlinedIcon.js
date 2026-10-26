import { initIcon } from "./icon.js";

//the url of the keyboard double arrow left outlined svg; resolved relative to this module
const URL_KEYBOARDDOUBLEARROWLEFTOUTLINED = new URL('../../assets/icons/keyboardDoubleArrowLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard double arrow left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardDoubleArrowLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardDoubleArrowLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDDOUBLEARROWLEFTOUTLINED }, ...properties);
}

/**
 * Creates a keyboard double arrow left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardDoubleArrowLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardDoubleArrowLeftOutlinedIcon(element, ...properties);
    return element;
}
