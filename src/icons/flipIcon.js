import { initIcon } from "./icon.js";

//the url of the flip svg; resolved relative to this module
const URL_FLIP = new URL('../../assets/icons/flip.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flip.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLIP }, ...properties);
}

/**
 * Creates a flip icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipIcon(element, ...properties);
    return element;
}
