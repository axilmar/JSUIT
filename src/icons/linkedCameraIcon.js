import { initIcon } from "./icon.js";

//the url of the linked camera svg; resolved relative to this module
const URL_LINKEDCAMERA = new URL('../../assets/icons/linkedCamera.svg', import.meta.url).href;

/**
 * Initializes an icon element as a linked camera icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/linkedCamera.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinkedCameraIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'linkedCameraIcon', url: URL_LINKEDCAMERA }, ...properties);
}

/**
 * Creates a linked camera icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const linkedCameraIcon = (...properties) => {
    const element = document.createElement('div');
    initLinkedCameraIcon(element, ...properties);
    return element;
}
