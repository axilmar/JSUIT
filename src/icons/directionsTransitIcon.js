import { initIcon } from "./icon.js";

//the url of the directions transit svg; resolved relative to this module
const URL_DIRECTIONSTRANSIT = new URL('../../assets/icons/directionsTransit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions transit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsTransit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsTransitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSTRANSIT }, ...properties);
}

/**
 * Creates a directions transit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsTransitIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsTransitIcon(element, ...properties);
    return element;
}
