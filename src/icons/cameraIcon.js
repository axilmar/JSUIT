import { initIcon } from "./icon.js";

//the url of the camera svg; resolved relative to this module
const URL_CAMERA = new URL('../../assets/icons/camera.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/camera.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraIcon', url: URL_CAMERA }, ...properties);
}

/**
 * Creates a camera icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraIcon(element, ...properties);
    return element;
}
