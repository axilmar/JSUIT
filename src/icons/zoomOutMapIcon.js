import { initIcon } from "./icon.js";

//the url of the zoom out map svg; resolved relative to this module
const URL_ZOOMOUTMAP = new URL('../../assets/icons/zoomOutMap.svg', import.meta.url).href;

/**
 * Initializes an icon element as a zoom out map icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/zoomOutMap.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initZoomOutMapIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ZOOMOUTMAP }, ...properties);
}

/**
 * Creates a zoom out map icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const zoomOutMapIcon = (...properties) => {
    const element = document.createElement('div');
    initZoomOutMapIcon(element, ...properties);
    return element;
}
