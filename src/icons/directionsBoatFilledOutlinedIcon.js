import { initIcon } from "./icon.js";

//the url of the directions boat filled outlined svg; resolved relative to this module
const URL_DIRECTIONSBOATFILLEDOUTLINED = new URL('../../assets/icons/directionsBoatFilledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions boat filled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsBoatFilledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsBoatFilledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsBoatFilledOutlinedIcon', url: URL_DIRECTIONSBOATFILLEDOUTLINED }, ...properties);
}

/**
 * Creates a directions boat filled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsBoatFilledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsBoatFilledOutlinedIcon(element, ...properties);
    return element;
}
