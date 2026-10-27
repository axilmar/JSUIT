import { initIcon } from "./icon.js";

//the url of the airline stops svg; resolved relative to this module
const URL_AIRLINESTOPS = new URL('../../assets/icons/airlineStops.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline stops icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineStops.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineStopsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airlineStopsIcon', url: URL_AIRLINESTOPS }, ...properties);
}

/**
 * Creates an airline stops icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineStopsIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineStopsIcon(element, ...properties);
    return element;
}
