import { initIcon } from "./icon.js";

//the url of the zoom in map outlined svg; resolved relative to this module
const URL_ZOOMINMAPOUTLINED = new URL('../../assets/icons/zoomInMapOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a zoom in map outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/zoomInMapOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initZoomInMapOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'zoomInMapOutlinedIcon', url: URL_ZOOMINMAPOUTLINED }, ...properties);
}

/**
 * Creates a zoom in map outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const zoomInMapOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initZoomInMapOutlinedIcon(element, ...properties);
    return element;
}
