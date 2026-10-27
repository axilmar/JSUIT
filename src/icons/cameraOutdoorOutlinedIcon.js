import { initIcon } from "./icon.js";

//the url of the camera outdoor outlined svg; resolved relative to this module
const URL_CAMERAOUTDOOROUTLINED = new URL('../../assets/icons/cameraOutdoorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a camera outdoor outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraOutdoorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraOutdoorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraOutdoorOutlinedIcon', url: URL_CAMERAOUTDOOROUTLINED }, ...properties);
}

/**
 * Creates a camera outdoor outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraOutdoorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraOutdoorOutlinedIcon(element, ...properties);
    return element;
}
