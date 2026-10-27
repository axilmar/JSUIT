import { initIcon } from "./icon.js";

//the url of the camera roll outlined svg; resolved relative to this module
const URL_CAMERAROLLOUTLINED = new URL('../../assets/icons/cameraRollOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera roll outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraRollOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraRollOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraRollOutlinedIcon', url: URL_CAMERAROLLOUTLINED }, ...properties);
}

/**
 * Creates a camera roll outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraRollOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraRollOutlinedIcon(element, ...properties);
    return element;
}
