import { initIcon } from "./icon.js";

//the url of the camera rear outlined svg; resolved relative to this module
const URL_CAMERAREAROUTLINED = new URL('../../assets/icons/cameraRearOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera rear outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraRearOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraRearOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraRearOutlinedIcon', url: URL_CAMERAREAROUTLINED }, ...properties);
}

/**
 * Creates a camera rear outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraRearOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraRearOutlinedIcon(element, ...properties);
    return element;
}
