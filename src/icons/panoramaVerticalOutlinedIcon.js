import { initIcon } from "./icon.js";

//the url of the panorama vertical outlined svg; resolved relative to this module
const URL_PANORAMAVERTICALOUTLINED = new URL('../../assets/icons/panoramaVerticalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama vertical outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaVerticalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaVerticalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAVERTICALOUTLINED }, ...properties);
}

/**
 * Creates a panorama vertical outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaVerticalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaVerticalOutlinedIcon(element, ...properties);
    return element;
}
