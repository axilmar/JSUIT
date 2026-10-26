import { initIcon } from "./icon.js";

//the url of the spatial tracking svg; resolved relative to this module
const URL_SPATIALTRACKING = new URL('../../assets/icons/spatialTracking.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spatial tracking icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spatialTracking.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpatialTrackingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPATIALTRACKING }, ...properties);
}

/**
 * Creates a spatial tracking icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spatialTrackingIcon = (...properties) => {
    const element = document.createElement('div');
    initSpatialTrackingIcon(element, ...properties);
    return element;
}
