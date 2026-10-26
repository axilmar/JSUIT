import { initIcon } from "./icon.js";

//the url of the spatial tracking outlined svg; resolved relative to this module
const URL_SPATIALTRACKINGOUTLINED = new URL('../../assets/icons/spatialTrackingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spatial tracking outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spatialTrackingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpatialTrackingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPATIALTRACKINGOUTLINED }, ...properties);
}

/**
 * Creates a spatial tracking outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spatialTrackingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpatialTrackingOutlinedIcon(element, ...properties);
    return element;
}
