import { initIcon } from "./icon.js";

//the url of the arrow back ios new svg; resolved relative to this module
const URL_ARROWBACKIOSNEW = new URL('../../assets/icons/arrowBackIosNew.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow back ios new icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowBackIosNew.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowBackIosNewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowBackIosNewIcon', url: URL_ARROWBACKIOSNEW }, ...properties);
}

/**
 * Creates an arrow back ios new icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowBackIosNewIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowBackIosNewIcon(element, ...properties);
    return element;
}
