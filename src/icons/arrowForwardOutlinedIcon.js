import { initIcon } from "./icon.js";

//the url of the arrow forward outlined svg; resolved relative to this module
const URL_ARROWFORWARDOUTLINED = new URL('../../assets/icons/arrowForwardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow forward outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowForwardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowForwardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWFORWARDOUTLINED }, ...properties);
}

/**
 * Creates an arrow forward outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowForwardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowForwardOutlinedIcon(element, ...properties);
    return element;
}
