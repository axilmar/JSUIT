import { initIcon } from "./icon.js";

//the url of the queue svg; resolved relative to this module
const URL_QUEUE = new URL('../../assets/icons/queue.svg', import.meta.url).href;

/**
 * Initializes an icon element as a queue icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queue.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueueIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'queueIcon', url: URL_QUEUE }, ...properties);
}

/**
 * Creates a queue icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queueIcon = (...properties) => {
    const element = document.createElement('div');
    initQueueIcon(element, ...properties);
    return element;
}
