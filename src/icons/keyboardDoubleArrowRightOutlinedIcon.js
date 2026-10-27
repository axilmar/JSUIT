import { initIcon } from "./icon.js";

//the url of the keyboard double arrow right outlined svg; resolved relative to this module
const URL_KEYBOARDDOUBLEARROWRIGHTOUTLINED = new URL('../../assets/icons/keyboardDoubleArrowRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard double arrow right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardDoubleArrowRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardDoubleArrowRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardDoubleArrowRightOutlinedIcon', url: URL_KEYBOARDDOUBLEARROWRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a keyboard double arrow right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardDoubleArrowRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardDoubleArrowRightOutlinedIcon(element, ...properties);
    return element;
}
