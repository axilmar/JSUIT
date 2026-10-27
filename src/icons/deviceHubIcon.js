import { initIcon } from "./icon.js";

//the url of the device hub svg; resolved relative to this module
const URL_DEVICEHUB = new URL('../../assets/icons/deviceHub.svg', import.meta.url).href;

/**
 * Initializes an icon element as a device hub icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deviceHub.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeviceHubIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deviceHubIcon', url: URL_DEVICEHUB }, ...properties);
}

/**
 * Creates a device hub icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deviceHubIcon = (...properties) => {
    const element = document.createElement('div');
    initDeviceHubIcon(element, ...properties);
    return element;
}
