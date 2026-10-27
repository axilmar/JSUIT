import { initIcon } from "./icon.js";

//the url of the zoom out map outlined svg; resolved relative to this module
const URL_ZOOMOUTMAPOUTLINED = new URL('../../assets/icons/zoomOutMapOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a zoom out map outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/zoomOutMapOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initZoomOutMapOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'zoomOutMapOutlinedIcon', url: URL_ZOOMOUTMAPOUTLINED }, ...properties);
}

/**
 * Creates a zoom out map outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const zoomOutMapOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initZoomOutMapOutlinedIcon(element, ...properties);
    return element;
}
