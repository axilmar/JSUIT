import { initIcon } from "./icon.js";

//the url of the camera front svg; resolved relative to this module
const URL_CAMERAFRONT = new URL('../../assets/icons/cameraFront.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera front icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraFront.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraFrontIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraFrontIcon', url: URL_CAMERAFRONT }, ...properties);
}

/**
 * Creates a camera front icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraFrontIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraFrontIcon(element, ...properties);
    return element;
}
