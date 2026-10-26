import { initIcon } from "./icon.js";

//the url of the flight land svg; resolved relative to this module
const URL_FLIGHTLAND = new URL('../../assets/icons/flightLand.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flight land icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flightLand.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlightLandIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLIGHTLAND }, ...properties);
}

/**
 * Creates a flight land icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flightLandIcon = (...properties) => {
    const element = document.createElement('div');
    initFlightLandIcon(element, ...properties);
    return element;
}
