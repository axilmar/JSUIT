import { initIcon } from "./icon.js";

//the url of the cloud off svg; resolved relative to this module
const URL_CLOUDOFF = new URL('../../assets/icons/cloudOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cloudOffIcon', url: URL_CLOUDOFF }, ...properties);
}

/**
 * Creates a cloud off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudOffIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudOffIcon(element, ...properties);
    return element;
}
