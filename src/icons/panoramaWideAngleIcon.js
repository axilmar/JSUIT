import { initIcon } from "./icon.js";

//the url of the panorama wide angle svg; resolved relative to this module
const URL_PANORAMAWIDEANGLE = new URL('../../assets/icons/panoramaWideAngle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama wide angle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaWideAngle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaWideAngleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAWIDEANGLE }, ...properties);
}

/**
 * Creates a panorama wide angle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaWideAngleIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaWideAngleIcon(element, ...properties);
    return element;
}
