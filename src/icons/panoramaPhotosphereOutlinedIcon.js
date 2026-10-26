import { initIcon } from "./icon.js";

//the url of the panorama photosphere outlined svg; resolved relative to this module
const URL_PANORAMAPHOTOSPHEREOUTLINED = new URL('../../assets/icons/panoramaPhotosphereOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama photosphere outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaPhotosphereOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaPhotosphereOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAPHOTOSPHEREOUTLINED }, ...properties);
}

/**
 * Creates a panorama photosphere outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaPhotosphereOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaPhotosphereOutlinedIcon(element, ...properties);
    return element;
}
