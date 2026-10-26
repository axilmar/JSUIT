import { initIcon } from "./icon.js";

//the url of the crop din svg; resolved relative to this module
const URL_CROPDIN = new URL('../../assets/icons/cropDin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop din icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropDin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropDinIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPDIN }, ...properties);
}

/**
 * Creates a crop din icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropDinIcon = (...properties) => {
    const element = document.createElement('div');
    initCropDinIcon(element, ...properties);
    return element;
}
