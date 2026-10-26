import { initIcon } from "./icon.js";

//the url of the exposure svg; resolved relative to this module
const URL_EXPOSURE = new URL('../../assets/icons/exposure.svg', import.meta.url).href;

/**
 * Initializes an icon element as an exposure icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/exposure.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExposureIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPOSURE }, ...properties);
}

/**
 * Creates an exposure icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const exposureIcon = (...properties) => {
    const element = document.createElement('div');
    initExposureIcon(element, ...properties);
    return element;
}
