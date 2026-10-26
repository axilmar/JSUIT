import { initIcon } from "./icon.js";

//the url of the directions boat filled svg; resolved relative to this module
const URL_DIRECTIONSBOATFILLED = new URL('../../assets/icons/directionsBoatFilled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions boat filled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsBoatFilled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsBoatFilledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSBOATFILLED }, ...properties);
}

/**
 * Creates a directions boat filled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsBoatFilledIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsBoatFilledIcon(element, ...properties);
    return element;
}
