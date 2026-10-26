import { initIcon } from "./icon.js";

//the url of the panorama fish eye svg; resolved relative to this module
const URL_PANORAMAFISHEYE = new URL('../../assets/icons/panoramaFishEye.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama fish eye icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaFishEye.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaFishEyeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAFISHEYE }, ...properties);
}

/**
 * Creates a panorama fish eye icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaFishEyeIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaFishEyeIcon(element, ...properties);
    return element;
}
