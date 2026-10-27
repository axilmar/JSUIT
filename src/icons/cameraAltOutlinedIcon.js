import { initIcon } from "./icon.js";

//the url of the camera alt outlined svg; resolved relative to this module
const URL_CAMERAALTOUTLINED = new URL('../../assets/icons/cameraAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraAltOutlinedIcon', url: URL_CAMERAALTOUTLINED }, ...properties);
}

/**
 * Creates a camera alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraAltOutlinedIcon(element, ...properties);
    return element;
}
