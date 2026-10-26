import { initIcon } from "./icon.js";

//the url of the flight takeoff outlined svg; resolved relative to this module
const URL_FLIGHTTAKEOFFOUTLINED = new URL('../../assets/icons/flightTakeoffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flight takeoff outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flightTakeoffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlightTakeoffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLIGHTTAKEOFFOUTLINED }, ...properties);
}

/**
 * Creates a flight takeoff outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flightTakeoffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlightTakeoffOutlinedIcon(element, ...properties);
    return element;
}
