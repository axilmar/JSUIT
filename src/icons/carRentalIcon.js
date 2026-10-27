import { initIcon } from "./icon.js";

//the url of the car rental svg; resolved relative to this module
const URL_CARRENTAL = new URL('../../assets/icons/carRental.svg', import.meta.url).href;

/**
 * Initializes an icon element as a car rental icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/carRental.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCarRentalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'carRentalIcon', url: URL_CARRENTAL }, ...properties);
}

/**
 * Creates a car rental icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const carRentalIcon = (...properties) => {
    const element = document.createElement('div');
    initCarRentalIcon(element, ...properties);
    return element;
}
