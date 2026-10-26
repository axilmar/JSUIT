import { initIcon } from "./icon.js";

//the url of the queue outlined svg; resolved relative to this module
const URL_QUEUEOUTLINED = new URL('../../assets/icons/queueOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a queue outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queueOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueueOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUEUEOUTLINED }, ...properties);
}

/**
 * Creates a queue outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queueOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQueueOutlinedIcon(element, ...properties);
    return element;
}
