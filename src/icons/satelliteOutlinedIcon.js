import { initIcon } from "./icon.js";

//the url of the satellite outlined svg; resolved relative to this module
const URL_SATELLITEOUTLINED = new URL('../../assets/icons/satelliteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a satellite outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/satelliteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSatelliteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SATELLITEOUTLINED }, ...properties);
}

/**
 * Creates a satellite outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const satelliteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSatelliteOutlinedIcon(element, ...properties);
    return element;
}
