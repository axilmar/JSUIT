import { initIcon } from "./icon.js";

//the url of the keyboard arrow right outlined svg; resolved relative to this module
const URL_KEYBOARDARROWRIGHTOUTLINED = new URL('../../assets/icons/keyboardArrowRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard arrow right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardArrowRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardArrowRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDARROWRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a keyboard arrow right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardArrowRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardArrowRightOutlinedIcon(element, ...properties);
    return element;
}
