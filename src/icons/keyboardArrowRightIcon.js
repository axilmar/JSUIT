import { initIcon } from "./icon.js";

//the url of the keyboard arrow right svg; resolved relative to this module
const URL_KEYBOARDARROWRIGHT = new URL('../../assets/icons/keyboardArrowRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard arrow right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardArrowRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardArrowRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDARROWRIGHT }, ...properties);
}

/**
 * Creates a keyboard arrow right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardArrowRightIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardArrowRightIcon(element, ...properties);
    return element;
}
