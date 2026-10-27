import { initIcon } from "./icon.js";

//the url of the directions boat svg; resolved relative to this module
const URL_DIRECTIONSBOAT = new URL('../../assets/icons/directionsBoat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions boat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsBoat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsBoatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsBoatIcon', url: URL_DIRECTIONSBOAT }, ...properties);
}

/**
 * Creates a directions boat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsBoatIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsBoatIcon(element, ...properties);
    return element;
}
