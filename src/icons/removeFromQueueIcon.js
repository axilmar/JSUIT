import { initIcon } from "./icon.js";

//the url of the remove from queue svg; resolved relative to this module
const URL_REMOVEFROMQUEUE = new URL('../../assets/icons/removeFromQueue.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove from queue icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeFromQueue.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveFromQueueIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeFromQueueIcon', url: URL_REMOVEFROMQUEUE }, ...properties);
}

/**
 * Creates a remove from queue icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeFromQueueIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveFromQueueIcon(element, ...properties);
    return element;
}
