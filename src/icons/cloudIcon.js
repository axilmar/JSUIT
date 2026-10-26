import { initIcon } from "./icon.js";

//the url of the cloud svg; resolved relative to this module
const URL_CLOUD = new URL('../../assets/icons/cloud.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloud.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOUD }, ...properties);
}

/**
 * Creates a cloud icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudIcon(element, ...properties);
    return element;
}
