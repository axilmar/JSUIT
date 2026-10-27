import { initIcon } from "./icon.js";

//the url of the panorama fish eye outlined svg; resolved relative to this module
const URL_PANORAMAFISHEYEOUTLINED = new URL('../../assets/icons/panoramaFishEyeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama fish eye outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaFishEyeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaFishEyeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panoramaFishEyeOutlinedIcon', url: URL_PANORAMAFISHEYEOUTLINED }, ...properties);
}

/**
 * Creates a panorama fish eye outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaFishEyeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaFishEyeOutlinedIcon(element, ...properties);
    return element;
}
