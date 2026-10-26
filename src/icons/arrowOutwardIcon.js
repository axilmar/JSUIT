import { initIcon } from "./icon.js";

//the url of the arrow outward svg; resolved relative to this module
const URL_ARROWOUTWARD = new URL('../../assets/icons/arrowOutward.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow outward icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowOutward.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowOutwardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWOUTWARD }, ...properties);
}

/**
 * Creates an arrow outward icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowOutwardIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowOutwardIcon(element, ...properties);
    return element;
}
