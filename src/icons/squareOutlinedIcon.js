import { initIcon } from "./icon.js";

//the url of the square outlined svg; resolved relative to this module
const URL_SQUAREOUTLINED = new URL('../../assets/icons/squareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a square outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/squareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSquareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'squareOutlinedIcon', url: URL_SQUAREOUTLINED }, ...properties);
}

/**
 * Creates a square outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const squareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSquareOutlinedIcon(element, ...properties);
    return element;
}
