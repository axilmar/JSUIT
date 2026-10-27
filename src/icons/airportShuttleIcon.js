import { initIcon } from "./icon.js";

//the url of the airport shuttle svg; resolved relative to this module
const URL_AIRPORTSHUTTLE = new URL('../../assets/icons/airportShuttle.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airport shuttle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airportShuttle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirportShuttleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airportShuttleIcon', url: URL_AIRPORTSHUTTLE }, ...properties);
}

/**
 * Creates an airport shuttle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airportShuttleIcon = (...properties) => {
    const element = document.createElement('div');
    initAirportShuttleIcon(element, ...properties);
    return element;
}
