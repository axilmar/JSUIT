import { initIcon } from "./icon.js";

//the url of the zoom in outlined svg; resolved relative to this module
const URL_ZOOMINOUTLINED = new URL('../../assets/icons/zoomInOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a zoom in outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/zoomInOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initZoomInOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ZOOMINOUTLINED }, ...properties);
}

/**
 * Creates a zoom in outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const zoomInOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initZoomInOutlinedIcon(element, ...properties);
    return element;
}
