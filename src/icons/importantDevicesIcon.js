import { initIcon } from "./icon.js";

//the url of the important devices svg; resolved relative to this module
const URL_IMPORTANTDEVICES = new URL('../../assets/icons/importantDevices.svg', import.meta.url).href;

/**
 * Initializes an icon element as an important devices icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/importantDevices.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImportantDevicesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'importantDevicesIcon', url: URL_IMPORTANTDEVICES }, ...properties);
}

/**
 * Creates an important devices icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const importantDevicesIcon = (...properties) => {
    const element = document.createElement('div');
    initImportantDevicesIcon(element, ...properties);
    return element;
}
