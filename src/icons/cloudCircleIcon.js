import { initIcon } from "./icon.js";

//the url of the cloud circle svg; resolved relative to this module
const URL_CLOUDCIRCLE = new URL('../../assets/icons/cloudCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOUDCIRCLE }, ...properties);
}

/**
 * Creates a cloud circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudCircleIcon(element, ...properties);
    return element;
}
