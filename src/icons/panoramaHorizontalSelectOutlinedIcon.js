import { initIcon } from "./icon.js";

//the url of the panorama horizontal select outlined svg; resolved relative to this module
const URL_PANORAMAHORIZONTALSELECTOUTLINED = new URL('../../assets/icons/panoramaHorizontalSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama horizontal select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaHorizontalSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaHorizontalSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panoramaHorizontalSelectOutlinedIcon', url: URL_PANORAMAHORIZONTALSELECTOUTLINED }, ...properties);
}

/**
 * Creates a panorama horizontal select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaHorizontalSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaHorizontalSelectOutlinedIcon(element, ...properties);
    return element;
}
