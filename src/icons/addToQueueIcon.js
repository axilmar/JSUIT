import { initIcon } from "./icon.js";

//the url of the add to queue svg; resolved relative to this module
const URL_ADDTOQUEUE = new URL('../../assets/icons/addToQueue.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add to queue icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addToQueue.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddToQueueIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDTOQUEUE }, ...properties);
}

/**
 * Creates an add to queue icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addToQueueIcon = (...properties) => {
    const element = document.createElement('div');
    initAddToQueueIcon(element, ...properties);
    return element;
}
