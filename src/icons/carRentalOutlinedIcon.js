import { initIcon } from "./icon.js";

//the url of the car rental outlined svg; resolved relative to this module
const URL_CARRENTALOUTLINED = new URL('../../assets/icons/carRentalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a car rental outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/carRentalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCarRentalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'carRentalOutlinedIcon', url: URL_CARRENTALOUTLINED }, ...properties);
}

/**
 * Creates a car rental outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const carRentalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCarRentalOutlinedIcon(element, ...properties);
    return element;
}
