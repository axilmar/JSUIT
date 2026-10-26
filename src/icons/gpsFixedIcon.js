import { initIcon } from "./icon.js";

//the url of the gps fixed svg; resolved relative to this module
const URL_GPSFIXED = new URL('../../assets/icons/gpsFixed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gps fixed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gpsFixed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGpsFixedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GPSFIXED }, ...properties);
}

/**
 * Creates a gps fixed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gpsFixedIcon = (...properties) => {
    const element = document.createElement('div');
    initGpsFixedIcon(element, ...properties);
    return element;
}
