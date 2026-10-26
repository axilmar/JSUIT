import { initIcon } from "./icon.js";

//the url of the blur circular svg; resolved relative to this module
const URL_BLURCIRCULAR = new URL('../../assets/icons/blurCircular.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blur circular icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blurCircular.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlurCircularIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLURCIRCULAR }, ...properties);
}

/**
 * Creates a blur circular icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blurCircularIcon = (...properties) => {
    const element = document.createElement('div');
    initBlurCircularIcon(element, ...properties);
    return element;
}
