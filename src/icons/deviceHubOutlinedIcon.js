import { initIcon } from "./icon.js";

//the url of the device hub outlined svg; resolved relative to this module
const URL_DEVICEHUBOUTLINED = new URL('../../assets/icons/deviceHubOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a device hub outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deviceHubOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeviceHubOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deviceHubOutlinedIcon', url: URL_DEVICEHUBOUTLINED }, ...properties);
}

/**
 * Creates a device hub outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deviceHubOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeviceHubOutlinedIcon(element, ...properties);
    return element;
}
