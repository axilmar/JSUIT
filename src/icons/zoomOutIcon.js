import { initIcon } from "./icon.js";

//the url of the zoom out svg; resolved relative to this module
const URL_ZOOMOUT = new URL('../../assets/icons/zoomOut.svg', import.meta.url).href;

/**
 * Initializes an icon element as a zoom out icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/zoomOut.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initZoomOutIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ZOOMOUT }, ...properties);
}

/**
 * Creates a zoom out icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const zoomOutIcon = (...properties) => {
    const element = document.createElement('div');
    initZoomOutIcon(element, ...properties);
    return element;
}
