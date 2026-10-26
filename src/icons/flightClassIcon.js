import { initIcon } from "./icon.js";

//the url of the flight class svg; resolved relative to this module
const URL_FLIGHTCLASS = new URL('../../assets/icons/flightClass.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flight class icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flightClass.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlightClassIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLIGHTCLASS }, ...properties);
}

/**
 * Creates a flight class icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flightClassIcon = (...properties) => {
    const element = document.createElement('div');
    initFlightClassIcon(element, ...properties);
    return element;
}
