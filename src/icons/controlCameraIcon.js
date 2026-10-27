import { initIcon } from "./icon.js";

//the url of the control camera svg; resolved relative to this module
const URL_CONTROLCAMERA = new URL('../../assets/icons/controlCamera.svg', import.meta.url).href;

/**
 * Initializes an icon element as a control camera icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/controlCamera.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initControlCameraIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'controlCameraIcon', url: URL_CONTROLCAMERA }, ...properties);
}

/**
 * Creates a control camera icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const controlCameraIcon = (...properties) => {
    const element = document.createElement('div');
    initControlCameraIcon(element, ...properties);
    return element;
}
