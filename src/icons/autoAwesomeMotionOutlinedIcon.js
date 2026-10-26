import { initIcon } from "./icon.js";

//the url of the auto awesome motion outlined svg; resolved relative to this module
const URL_AUTOAWESOMEMOTIONOUTLINED = new URL('../../assets/icons/autoAwesomeMotionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto awesome motion outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoAwesomeMotionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoAwesomeMotionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTOAWESOMEMOTIONOUTLINED }, ...properties);
}

/**
 * Creates an auto awesome motion outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoAwesomeMotionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoAwesomeMotionOutlinedIcon(element, ...properties);
    return element;
}
