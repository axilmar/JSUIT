import { initIcon } from "./icon.js";

//the url of the camera enhance outlined svg; resolved relative to this module
const URL_CAMERAENHANCEOUTLINED = new URL('../../assets/icons/cameraEnhanceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera enhance outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraEnhanceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraEnhanceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraEnhanceOutlinedIcon', url: URL_CAMERAENHANCEOUTLINED }, ...properties);
}

/**
 * Creates a camera enhance outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraEnhanceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraEnhanceOutlinedIcon(element, ...properties);
    return element;
}
