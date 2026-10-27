import { initIcon } from "./icon.js";

//the url of the square foot outlined svg; resolved relative to this module
const URL_SQUAREFOOTOUTLINED = new URL('../../assets/icons/squareFootOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a square foot outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/squareFootOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSquareFootOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'squareFootOutlinedIcon', url: URL_SQUAREFOOTOUTLINED }, ...properties);
}

/**
 * Creates a square foot outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const squareFootOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSquareFootOutlinedIcon(element, ...properties);
    return element;
}
