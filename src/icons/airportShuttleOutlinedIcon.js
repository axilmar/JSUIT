import { initIcon } from "./icon.js";

//the url of the airport shuttle outlined svg; resolved relative to this module
const URL_AIRPORTSHUTTLEOUTLINED = new URL('../../assets/icons/airportShuttleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airport shuttle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airportShuttleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirportShuttleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRPORTSHUTTLEOUTLINED }, ...properties);
}

/**
 * Creates an airport shuttle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airportShuttleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirportShuttleOutlinedIcon(element, ...properties);
    return element;
}
