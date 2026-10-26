import { initIcon } from "./icon.js";

//the url of the zoom in svg; resolved relative to this module
const URL_ZOOMIN = new URL('../../assets/icons/zoomIn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a zoom in icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/zoomIn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initZoomInIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ZOOMIN }, ...properties);
}

/**
 * Creates a zoom in icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const zoomInIcon = (...properties) => {
    const element = document.createElement('div');
    initZoomInIcon(element, ...properties);
    return element;
}
