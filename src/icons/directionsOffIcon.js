import { initIcon } from "./icon.js";

//the url of the directions off svg; resolved relative to this module
const URL_DIRECTIONSOFF = new URL('../../assets/icons/directionsOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSOFF }, ...properties);
}

/**
 * Creates a directions off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsOffIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsOffIcon(element, ...properties);
    return element;
}
