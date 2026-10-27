import { initIcon } from "./icon.js";

//the url of the flight svg; resolved relative to this module
const URL_FLIGHT = new URL('../../assets/icons/flight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flight icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flightIcon', url: URL_FLIGHT }, ...properties);
}

/**
 * Creates a flight icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flightIcon = (...properties) => {
    const element = document.createElement('div');
    initFlightIcon(element, ...properties);
    return element;
}
