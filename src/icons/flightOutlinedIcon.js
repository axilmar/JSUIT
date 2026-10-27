import { initIcon } from "./icon.js";

//the url of the flight outlined svg; resolved relative to this module
const URL_FLIGHTOUTLINED = new URL('../../assets/icons/flightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flight outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flightOutlinedIcon', url: URL_FLIGHTOUTLINED }, ...properties);
}

/**
 * Creates a flight outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlightOutlinedIcon(element, ...properties);
    return element;
}
