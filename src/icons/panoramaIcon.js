import { initIcon } from "./icon.js";

//the url of the panorama svg; resolved relative to this module
const URL_PANORAMA = new URL('../../assets/icons/panorama.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panorama.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMA }, ...properties);
}

/**
 * Creates a panorama icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaIcon(element, ...properties);
    return element;
}
