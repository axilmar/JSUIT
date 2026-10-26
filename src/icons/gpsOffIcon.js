import { initIcon } from "./icon.js";

//the url of the gps off svg; resolved relative to this module
const URL_GPSOFF = new URL('../../assets/icons/gpsOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gps off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gpsOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGpsOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GPSOFF }, ...properties);
}

/**
 * Creates a gps off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gpsOffIcon = (...properties) => {
    const element = document.createElement('div');
    initGpsOffIcon(element, ...properties);
    return element;
}
