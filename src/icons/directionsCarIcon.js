import { initIcon } from "./icon.js";

//the url of the directions car svg; resolved relative to this module
const URL_DIRECTIONSCAR = new URL('../../assets/icons/directionsCar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions car icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsCar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsCarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSCAR }, ...properties);
}

/**
 * Creates a directions car icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsCarIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsCarIcon(element, ...properties);
    return element;
}
