import { initIcon } from "./icon.js";

//the url of the camera outdoor svg; resolved relative to this module
const URL_CAMERAOUTDOOR = new URL('../../assets/icons/cameraOutdoor.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera outdoor icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraOutdoor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraOutdoorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAMERAOUTDOOR }, ...properties);
}

/**
 * Creates a camera outdoor icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraOutdoorIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraOutdoorIcon(element, ...properties);
    return element;
}
