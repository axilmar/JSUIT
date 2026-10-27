import { initIcon } from "./icon.js";

//the url of the panorama horizontal svg; resolved relative to this module
const URL_PANORAMAHORIZONTAL = new URL('../../assets/icons/panoramaHorizontal.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama horizontal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaHorizontal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaHorizontalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panoramaHorizontalIcon', url: URL_PANORAMAHORIZONTAL }, ...properties);
}

/**
 * Creates a panorama horizontal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaHorizontalIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaHorizontalIcon(element, ...properties);
    return element;
}
