import { initIcon } from "./icon.js";

//the url of the arrow downward svg; resolved relative to this module
const URL_ARROWDOWNWARD = new URL('../../assets/icons/arrowDownward.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow downward icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowDownward.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowDownwardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWDOWNWARD }, ...properties);
}

/**
 * Creates an arrow downward icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowDownwardIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowDownwardIcon(element, ...properties);
    return element;
}
