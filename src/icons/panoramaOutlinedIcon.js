import { initIcon } from "./icon.js";

//the url of the panorama outlined svg; resolved relative to this module
const URL_PANORAMAOUTLINED = new URL('../../assets/icons/panoramaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panoramaOutlinedIcon', url: URL_PANORAMAOUTLINED }, ...properties);
}

/**
 * Creates a panorama outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaOutlinedIcon(element, ...properties);
    return element;
}
