import { initIcon } from "./icon.js";

//the url of the flight takeoff svg; resolved relative to this module
const URL_FLIGHTTAKEOFF = new URL('../../assets/icons/flightTakeoff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flight takeoff icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flightTakeoff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlightTakeoffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flightTakeoffIcon', url: URL_FLIGHTTAKEOFF }, ...properties);
}

/**
 * Creates a flight takeoff icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flightTakeoffIcon = (...properties) => {
    const element = document.createElement('div');
    initFlightTakeoffIcon(element, ...properties);
    return element;
}
