import { initIcon } from "./icon.js";

//the url of the carpenter svg; resolved relative to this module
const URL_CARPENTER = new URL('../../assets/icons/carpenter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a carpenter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/carpenter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCarpenterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CARPENTER }, ...properties);
}

/**
 * Creates a carpenter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const carpenterIcon = (...properties) => {
    const element = document.createElement('div');
    initCarpenterIcon(element, ...properties);
    return element;
}
