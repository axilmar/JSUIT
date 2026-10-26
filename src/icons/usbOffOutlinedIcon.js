import { initIcon } from "./icon.js";

//the url of the usb off outlined svg; resolved relative to this module
const URL_USBOFFOUTLINED = new URL('../../assets/icons/usbOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an usb off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/usbOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUsbOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_USBOFFOUTLINED }, ...properties);
}

/**
 * Creates an usb off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const usbOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUsbOffOutlinedIcon(element, ...properties);
    return element;
}
