import { initIcon } from "./icon.js";

//the url of the zoom in map svg; resolved relative to this module
const URL_ZOOMINMAP = new URL('../../assets/icons/zoomInMap.svg', import.meta.url).href;

/**
 * Initializes an icon element as a zoom in map icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/zoomInMap.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initZoomInMapIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ZOOMINMAP }, ...properties);
}

/**
 * Creates a zoom in map icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const zoomInMapIcon = (...properties) => {
    const element = document.createElement('div');
    initZoomInMapIcon(element, ...properties);
    return element;
}
