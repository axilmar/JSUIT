import { initIcon } from "./icon.js";

//the url of the zoom out outlined svg; resolved relative to this module
const URL_ZOOMOUTOUTLINED = new URL('../../assets/icons/zoomOutOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a zoom out outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/zoomOutOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initZoomOutOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'zoomOutOutlinedIcon', url: URL_ZOOMOUTOUTLINED }, ...properties);
}

/**
 * Creates a zoom out outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const zoomOutOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initZoomOutOutlinedIcon(element, ...properties);
    return element;
}
