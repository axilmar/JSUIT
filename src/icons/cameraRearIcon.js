import { initIcon } from "./icon.js";

//the url of the camera rear svg; resolved relative to this module
const URL_CAMERAREAR = new URL('../../assets/icons/cameraRear.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera rear icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraRear.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraRearIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraRearIcon', url: URL_CAMERAREAR }, ...properties);
}

/**
 * Creates a camera rear icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraRearIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraRearIcon(element, ...properties);
    return element;
}
