import { initIcon } from "./icon.js";

//the url of the camera indoor svg; resolved relative to this module
const URL_CAMERAINDOOR = new URL('../../assets/icons/cameraIndoor.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera indoor icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraIndoor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraIndoorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAMERAINDOOR }, ...properties);
}

/**
 * Creates a camera indoor icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraIndoorIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraIndoorIcon(element, ...properties);
    return element;
}
