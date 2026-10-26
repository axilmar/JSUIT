import { initIcon } from "./icon.js";

//the url of the satellite alt svg; resolved relative to this module
const URL_SATELLITEALT = new URL('../../assets/icons/satelliteAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a satellite alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/satelliteAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSatelliteAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SATELLITEALT }, ...properties);
}

/**
 * Creates a satellite alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const satelliteAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSatelliteAltIcon(element, ...properties);
    return element;
}
