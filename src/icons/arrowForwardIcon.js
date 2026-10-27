import { initIcon } from "./icon.js";

//the url of the arrow forward svg; resolved relative to this module
const URL_ARROWFORWARD = new URL('../../assets/icons/arrowForward.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow forward icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowForward.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowForwardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowForwardIcon', url: URL_ARROWFORWARD }, ...properties);
}

/**
 * Creates an arrow forward icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowForwardIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowForwardIcon(element, ...properties);
    return element;
}
