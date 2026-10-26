import { initIcon } from "./icon.js";

//the url of the camera indoor outlined svg; resolved relative to this module
const URL_CAMERAINDOOROUTLINED = new URL('../../assets/icons/cameraIndoorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera indoor outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraIndoorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraIndoorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAMERAINDOOROUTLINED }, ...properties);
}

/**
 * Creates a camera indoor outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraIndoorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraIndoorOutlinedIcon(element, ...properties);
    return element;
}
