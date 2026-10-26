import { initIcon } from "./icon.js";

//the url of the panorama vertical svg; resolved relative to this module
const URL_PANORAMAVERTICAL = new URL('../../assets/icons/panoramaVertical.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama vertical icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaVertical.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaVerticalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAVERTICAL }, ...properties);
}

/**
 * Creates a panorama vertical icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaVerticalIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaVerticalIcon(element, ...properties);
    return element;
}
