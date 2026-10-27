import { initIcon } from "./icon.js";

//the url of the square foot svg; resolved relative to this module
const URL_SQUAREFOOT = new URL('../../assets/icons/squareFoot.svg', import.meta.url).href;

/**
 * Initializes an icon element as a square foot icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/squareFoot.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSquareFootIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'squareFootIcon', url: URL_SQUAREFOOT }, ...properties);
}

/**
 * Creates a square foot icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const squareFootIcon = (...properties) => {
    const element = document.createElement('div');
    initSquareFootIcon(element, ...properties);
    return element;
}
