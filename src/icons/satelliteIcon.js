import { initIcon } from "./icon.js";

//the url of the satellite svg; resolved relative to this module
const URL_SATELLITE = new URL('../../assets/icons/satellite.svg', import.meta.url).href;

/**
 * Initializes an icon element as a satellite icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/satellite.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSatelliteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SATELLITE }, ...properties);
}

/**
 * Creates a satellite icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const satelliteIcon = (...properties) => {
    const element = document.createElement('div');
    initSatelliteIcon(element, ...properties);
    return element;
}
