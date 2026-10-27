import { initIcon } from "./icon.js";

//the url of the arrow back svg; resolved relative to this module
const URL_ARROWBACK = new URL('../../assets/icons/arrowBack.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow back icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowBack.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowBackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowBackIcon', url: URL_ARROWBACK }, ...properties);
}

/**
 * Creates an arrow back icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowBackIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowBackIcon(element, ...properties);
    return element;
}
