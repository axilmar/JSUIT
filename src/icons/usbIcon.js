import { initIcon } from "./icon.js";

//the url of the usb svg; resolved relative to this module
const URL_USB = new URL('../../assets/icons/usb.svg', import.meta.url).href;

/**
 * Initializes an icon element as an usb icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/usb.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUsbIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_USB }, ...properties);
}

/**
 * Creates an usb icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const usbIcon = (...properties) => {
    const element = document.createElement('div');
    initUsbIcon(element, ...properties);
    return element;
}
