import { initIcon } from "./icon.js";

//the url of the arrow forward ios svg; resolved relative to this module
const URL_ARROWFORWARDIOS = new URL('../../assets/icons/arrowForwardIos.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow forward ios icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowForwardIos.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowForwardIosIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowForwardIosIcon', url: URL_ARROWFORWARDIOS }, ...properties);
}

/**
 * Creates an arrow forward ios icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowForwardIosIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowForwardIosIcon(element, ...properties);
    return element;
}
