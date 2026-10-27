import { initIcon } from "./icon.js";

//the url of the cloud queue outlined svg; resolved relative to this module
const URL_CLOUDQUEUEOUTLINED = new URL('../../assets/icons/cloudQueueOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud queue outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudQueueOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudQueueOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cloudQueueOutlinedIcon', url: URL_CLOUDQUEUEOUTLINED }, ...properties);
}

/**
 * Creates a cloud queue outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudQueueOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudQueueOutlinedIcon(element, ...properties);
    return element;
}
