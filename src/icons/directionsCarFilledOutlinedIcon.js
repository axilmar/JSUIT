import { initIcon } from "./icon.js";

//the url of the directions car filled outlined svg; resolved relative to this module
const URL_DIRECTIONSCARFILLEDOUTLINED = new URL('../../assets/icons/directionsCarFilledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions car filled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsCarFilledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsCarFilledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSCARFILLEDOUTLINED }, ...properties);
}

/**
 * Creates a directions car filled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsCarFilledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsCarFilledOutlinedIcon(element, ...properties);
    return element;
}
