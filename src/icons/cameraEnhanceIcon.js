import { initIcon } from "./icon.js";

//the url of the camera enhance svg; resolved relative to this module
const URL_CAMERAENHANCE = new URL('../../assets/icons/cameraEnhance.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera enhance icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraEnhance.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraEnhanceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAMERAENHANCE }, ...properties);
}

/**
 * Creates a camera enhance icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraEnhanceIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraEnhanceIcon(element, ...properties);
    return element;
}
