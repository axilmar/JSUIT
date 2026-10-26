import { initIcon } from "./icon.js";

//the url of the camera alt svg; resolved relative to this module
const URL_CAMERAALT = new URL('../../assets/icons/cameraAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAMERAALT }, ...properties);
}

/**
 * Creates a camera alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraAltIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraAltIcon(element, ...properties);
    return element;
}
