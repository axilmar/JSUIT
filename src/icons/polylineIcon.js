import { initIcon } from "./icon.js";

//the url of the polyline svg; resolved relative to this module
const URL_POLYLINE = new URL('../../assets/icons/polyline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a polyline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/polyline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPolylineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POLYLINE }, ...properties);
}

/**
 * Creates a polyline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const polylineIcon = (...properties) => {
    const element = document.createElement('div');
    initPolylineIcon(element, ...properties);
    return element;
}
