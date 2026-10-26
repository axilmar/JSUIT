import { initIcon } from "./icon.js";

//the url of the devices svg; resolved relative to this module
const URL_DEVICES = new URL('../../assets/icons/devices.svg', import.meta.url).href;

/**
 * Initializes an icon element as a devices icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/devices.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDevicesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVICES }, ...properties);
}

/**
 * Creates a devices icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const devicesIcon = (...properties) => {
    const element = document.createElement('div');
    initDevicesIcon(element, ...properties);
    return element;
}
