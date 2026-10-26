import { initIcon } from "./icon.js";

//the url of the arrow forward ios outlined svg; resolved relative to this module
const URL_ARROWFORWARDIOSOUTLINED = new URL('../../assets/icons/arrowForwardIosOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow forward ios outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowForwardIosOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowForwardIosOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWFORWARDIOSOUTLINED }, ...properties);
}

/**
 * Creates an arrow forward ios outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowForwardIosOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowForwardIosOutlinedIcon(element, ...properties);
    return element;
}
