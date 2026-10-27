import { initIcon } from "./icon.js";

//the url of the directions off outlined svg; resolved relative to this module
const URL_DIRECTIONSOFFOUTLINED = new URL('../../assets/icons/directionsOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsOffOutlinedIcon', url: URL_DIRECTIONSOFFOUTLINED }, ...properties);
}

/**
 * Creates a directions off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsOffOutlinedIcon(element, ...properties);
    return element;
}
