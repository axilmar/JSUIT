import { initIcon } from "./icon.js";

//the url of the directions car outlined svg; resolved relative to this module
const URL_DIRECTIONSCAROUTLINED = new URL('../../assets/icons/directionsCarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions car outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsCarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsCarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSCAROUTLINED }, ...properties);
}

/**
 * Creates a directions car outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsCarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsCarOutlinedIcon(element, ...properties);
    return element;
}
