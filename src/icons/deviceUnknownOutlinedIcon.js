import { initIcon } from "./icon.js";

//the url of the device unknown outlined svg; resolved relative to this module
const URL_DEVICEUNKNOWNOUTLINED = new URL('../../assets/icons/deviceUnknownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a device unknown outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deviceUnknownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeviceUnknownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVICEUNKNOWNOUTLINED }, ...properties);
}

/**
 * Creates a device unknown outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deviceUnknownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeviceUnknownOutlinedIcon(element, ...properties);
    return element;
}
