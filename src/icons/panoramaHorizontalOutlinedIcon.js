import { initIcon } from "./icon.js";

//the url of the panorama horizontal outlined svg; resolved relative to this module
const URL_PANORAMAHORIZONTALOUTLINED = new URL('../../assets/icons/panoramaHorizontalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama horizontal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaHorizontalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaHorizontalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAHORIZONTALOUTLINED }, ...properties);
}

/**
 * Creates a panorama horizontal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaHorizontalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaHorizontalOutlinedIcon(element, ...properties);
    return element;
}
