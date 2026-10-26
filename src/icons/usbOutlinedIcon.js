import { initIcon } from "./icon.js";

//the url of the usb outlined svg; resolved relative to this module
const URL_USBOUTLINED = new URL('../../assets/icons/usbOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an usb outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/usbOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUsbOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_USBOUTLINED }, ...properties);
}

/**
 * Creates an usb outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const usbOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUsbOutlinedIcon(element, ...properties);
    return element;
}
