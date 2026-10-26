import { initIcon } from "./icon.js";

//the url of the directions svg; resolved relative to this module
const URL_DIRECTIONS = new URL('../../assets/icons/directions.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directions.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONS }, ...properties);
}

/**
 * Creates a directions icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsIcon(element, ...properties);
    return element;
}
