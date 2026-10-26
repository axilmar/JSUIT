import { initIcon } from "./icon.js";

//the url of the airline stops outlined svg; resolved relative to this module
const URL_AIRLINESTOPSOUTLINED = new URL('../../assets/icons/airlineStopsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airline stops outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airlineStopsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirlineStopsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRLINESTOPSOUTLINED }, ...properties);
}

/**
 * Creates an airline stops outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airlineStopsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirlineStopsOutlinedIcon(element, ...properties);
    return element;
}
