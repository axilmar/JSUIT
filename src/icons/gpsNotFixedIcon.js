import { initIcon } from "./icon.js";

//the url of the gps not fixed svg; resolved relative to this module
const URL_GPSNOTFIXED = new URL('../../assets/icons/gpsNotFixed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gps not fixed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gpsNotFixed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGpsNotFixedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GPSNOTFIXED }, ...properties);
}

/**
 * Creates a gps not fixed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gpsNotFixedIcon = (...properties) => {
    const element = document.createElement('div');
    initGpsNotFixedIcon(element, ...properties);
    return element;
}
