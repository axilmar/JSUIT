import { initIcon } from "./icon.js";

//the url of the tapas svg; resolved relative to this module
const URL_TAPAS = new URL('../../assets/icons/tapas.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tapas icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tapas.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTapasIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TAPAS }, ...properties);
}

/**
 * Creates a tapas icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tapasIcon = (...properties) => {
    const element = document.createElement('div');
    initTapasIcon(element, ...properties);
    return element;
}
