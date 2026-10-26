import { initIcon } from "./icon.js";

//the url of the flight land outlined svg; resolved relative to this module
const URL_FLIGHTLANDOUTLINED = new URL('../../assets/icons/flightLandOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flight land outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flightLandOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlightLandOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLIGHTLANDOUTLINED }, ...properties);
}

/**
 * Creates a flight land outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flightLandOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlightLandOutlinedIcon(element, ...properties);
    return element;
}
