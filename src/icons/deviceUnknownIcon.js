import { initIcon } from "./icon.js";

//the url of the device unknown svg; resolved relative to this module
const URL_DEVICEUNKNOWN = new URL('../../assets/icons/deviceUnknown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a device unknown icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deviceUnknown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeviceUnknownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVICEUNKNOWN }, ...properties);
}

/**
 * Creates a device unknown icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deviceUnknownIcon = (...properties) => {
    const element = document.createElement('div');
    initDeviceUnknownIcon(element, ...properties);
    return element;
}
