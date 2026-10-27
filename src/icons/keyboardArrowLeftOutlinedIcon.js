import { initIcon } from "./icon.js";

//the url of the keyboard arrow left outlined svg; resolved relative to this module
const URL_KEYBOARDARROWLEFTOUTLINED = new URL('../../assets/icons/keyboardArrowLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard arrow left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardArrowLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardArrowLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardArrowLeftOutlinedIcon', url: URL_KEYBOARDARROWLEFTOUTLINED }, ...properties);
}

/**
 * Creates a keyboard arrow left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardArrowLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardArrowLeftOutlinedIcon(element, ...properties);
    return element;
}
