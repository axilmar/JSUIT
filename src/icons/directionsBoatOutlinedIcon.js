import { initIcon } from "./icon.js";

//the url of the directions boat outlined svg; resolved relative to this module
const URL_DIRECTIONSBOATOUTLINED = new URL('../../assets/icons/directionsBoatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions boat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsBoatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsBoatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSBOATOUTLINED }, ...properties);
}

/**
 * Creates a directions boat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsBoatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsBoatOutlinedIcon(element, ...properties);
    return element;
}
