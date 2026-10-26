import { initIcon } from "./icon.js";

//the url of the directions run svg; resolved relative to this module
const URL_DIRECTIONSRUN = new URL('../../assets/icons/directionsRun.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions run icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsRun.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsRunIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSRUN }, ...properties);
}

/**
 * Creates a directions run icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsRunIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsRunIcon(element, ...properties);
    return element;
}
