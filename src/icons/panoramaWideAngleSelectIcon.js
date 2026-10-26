import { initIcon } from "./icon.js";

//the url of the panorama wide angle select svg; resolved relative to this module
const URL_PANORAMAWIDEANGLESELECT = new URL('../../assets/icons/panoramaWideAngleSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama wide angle select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaWideAngleSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaWideAngleSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAWIDEANGLESELECT }, ...properties);
}

/**
 * Creates a panorama wide angle select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaWideAngleSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaWideAngleSelectIcon(element, ...properties);
    return element;
}
