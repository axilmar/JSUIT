import { initIcon } from "./icon.js";

//the url of the square svg; resolved relative to this module
const URL_SQUARE = new URL('../../assets/icons/square.svg', import.meta.url).href;

/**
 * Initializes an icon element as a square icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/square.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSquareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'squareIcon', url: URL_SQUARE }, ...properties);
}

/**
 * Creates a square icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const squareIcon = (...properties) => {
    const element = document.createElement('div');
    initSquareIcon(element, ...properties);
    return element;
}
