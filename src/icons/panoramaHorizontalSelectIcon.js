import { initIcon } from "./icon.js";

//the url of the panorama horizontal select svg; resolved relative to this module
const URL_PANORAMAHORIZONTALSELECT = new URL('../../assets/icons/panoramaHorizontalSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama horizontal select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaHorizontalSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaHorizontalSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panoramaHorizontalSelectIcon', url: URL_PANORAMAHORIZONTALSELECT }, ...properties);
}

/**
 * Creates a panorama horizontal select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaHorizontalSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaHorizontalSelectIcon(element, ...properties);
    return element;
}
