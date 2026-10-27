import { initIcon } from "./icon.js";

//the url of the bungalow svg; resolved relative to this module
const URL_BUNGALOW = new URL('../../assets/icons/bungalow.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bungalow icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bungalow.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBungalowIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bungalowIcon', url: URL_BUNGALOW }, ...properties);
}

/**
 * Creates a bungalow icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bungalowIcon = (...properties) => {
    const element = document.createElement('div');
    initBungalowIcon(element, ...properties);
    return element;
}
