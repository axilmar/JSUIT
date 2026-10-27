import { initIcon } from "./icon.js";

//the url of the keyboard double arrow right svg; resolved relative to this module
const URL_KEYBOARDDOUBLEARROWRIGHT = new URL('../../assets/icons/keyboardDoubleArrowRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard double arrow right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardDoubleArrowRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardDoubleArrowRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardDoubleArrowRightIcon', url: URL_KEYBOARDDOUBLEARROWRIGHT }, ...properties);
}

/**
 * Creates a keyboard double arrow right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardDoubleArrowRightIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardDoubleArrowRightIcon(element, ...properties);
    return element;
}
