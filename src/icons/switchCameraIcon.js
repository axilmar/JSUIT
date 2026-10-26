import { initIcon } from "./icon.js";

//the url of the switch camera svg; resolved relative to this module
const URL_SWITCHCAMERA = new URL('../../assets/icons/switchCamera.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch camera icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchCamera.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchCameraIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWITCHCAMERA }, ...properties);
}

/**
 * Creates a switch camera icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchCameraIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchCameraIcon(element, ...properties);
    return element;
}
