import { initIcon } from "./icon.js";

//the url of the polyline outlined svg; resolved relative to this module
const URL_POLYLINEOUTLINED = new URL('../../assets/icons/polylineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a polyline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/polylineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPolylineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POLYLINEOUTLINED }, ...properties);
}

/**
 * Creates a polyline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const polylineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPolylineOutlinedIcon(element, ...properties);
    return element;
}
