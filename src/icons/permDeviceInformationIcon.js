import { initIcon } from "./icon.js";

//the url of the perm device information svg; resolved relative to this module
const URL_PERMDEVICEINFORMATION = new URL('../../assets/icons/permDeviceInformation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm device information icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permDeviceInformation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermDeviceInformationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'permDeviceInformationIcon', url: URL_PERMDEVICEINFORMATION }, ...properties);
}

/**
 * Creates a perm device information icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permDeviceInformationIcon = (...properties) => {
    const element = document.createElement('div');
    initPermDeviceInformationIcon(element, ...properties);
    return element;
}
