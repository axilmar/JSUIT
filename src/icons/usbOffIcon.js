import { initIcon } from "./icon.js";

//the url of the usb off svg; resolved relative to this module
const URL_USBOFF = new URL('../../assets/icons/usbOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as an usb off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/usbOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUsbOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_USBOFF }, ...properties);
}

/**
 * Creates an usb off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const usbOffIcon = (...properties) => {
    const element = document.createElement('div');
    initUsbOffIcon(element, ...properties);
    return element;
}
