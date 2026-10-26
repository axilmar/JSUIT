import { initIcon } from "./icon.js";

//the url of the pix svg; resolved relative to this module
const URL_PIX = new URL('../../assets/icons/pix.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pix icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pix.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPixIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PIX }, ...properties);
}

/**
 * Creates a pix icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pixIcon = (...properties) => {
    const element = document.createElement('div');
    initPixIcon(element, ...properties);
    return element;
}
