import { initIcon } from "./icon.js";

//the url of the cloud queue svg; resolved relative to this module
const URL_CLOUDQUEUE = new URL('../../assets/icons/cloudQueue.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud queue icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudQueue.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudQueueIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOUDQUEUE }, ...properties);
}

/**
 * Creates a cloud queue icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudQueueIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudQueueIcon(element, ...properties);
    return element;
}
