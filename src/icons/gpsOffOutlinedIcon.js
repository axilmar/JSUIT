import { initIcon } from "./icon.js";

//the url of the gps off outlined svg; resolved relative to this module
const URL_GPSOFFOUTLINED = new URL('../../assets/icons/gpsOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gps off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gpsOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGpsOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GPSOFFOUTLINED }, ...properties);
}

/**
 * Creates a gps off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gpsOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGpsOffOutlinedIcon(element, ...properties);
    return element;
}
