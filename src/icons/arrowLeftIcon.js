import { initIcon } from "./icon.js";

//the url of the arrow left svg; resolved relative to this module
const URL_ARROWLEFT = new URL('../../assets/icons/arrowLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWLEFT }, ...properties);
}

/**
 * Creates an arrow left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowLeftIcon(element, ...properties);
    return element;
}
