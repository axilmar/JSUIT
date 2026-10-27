import { initIcon } from "./icon.js";

//the url of the flight class outlined svg; resolved relative to this module
const URL_FLIGHTCLASSOUTLINED = new URL('../../assets/icons/flightClassOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flight class outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flightClassOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlightClassOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flightClassOutlinedIcon', url: URL_FLIGHTCLASSOUTLINED }, ...properties);
}

/**
 * Creates a flight class outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flightClassOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlightClassOutlinedIcon(element, ...properties);
    return element;
}
