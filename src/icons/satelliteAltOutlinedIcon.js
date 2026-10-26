import { initIcon } from "./icon.js";

//the url of the satellite alt outlined svg; resolved relative to this module
const URL_SATELLITEALTOUTLINED = new URL('../../assets/icons/satelliteAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a satellite alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/satelliteAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSatelliteAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SATELLITEALTOUTLINED }, ...properties);
}

/**
 * Creates a satellite alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const satelliteAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSatelliteAltOutlinedIcon(element, ...properties);
    return element;
}
