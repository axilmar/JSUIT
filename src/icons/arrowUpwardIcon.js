import { initIcon } from "./icon.js";

//the url of the arrow upward svg; resolved relative to this module
const URL_ARROWUPWARD = new URL('../../assets/icons/arrowUpward.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow upward icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowUpward.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowUpwardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowUpwardIcon', url: URL_ARROWUPWARD }, ...properties);
}

/**
 * Creates an arrow upward icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowUpwardIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowUpwardIcon(element, ...properties);
    return element;
}
