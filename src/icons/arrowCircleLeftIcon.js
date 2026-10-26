import { initIcon } from "./icon.js";

//the url of the arrow circle left svg; resolved relative to this module
const URL_ARROWCIRCLELEFT = new URL('../../assets/icons/arrowCircleLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow circle left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowCircleLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowCircleLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWCIRCLELEFT }, ...properties);
}

/**
 * Creates an arrow circle left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowCircleLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowCircleLeftIcon(element, ...properties);
    return element;
}
