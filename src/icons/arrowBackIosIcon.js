import { initIcon } from "./icon.js";

//the url of the arrow back ios svg; resolved relative to this module
const URL_ARROWBACKIOS = new URL('../../assets/icons/arrowBackIos.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow back ios icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowBackIos.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowBackIosIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWBACKIOS }, ...properties);
}

/**
 * Creates an arrow back ios icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowBackIosIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowBackIosIcon(element, ...properties);
    return element;
}
