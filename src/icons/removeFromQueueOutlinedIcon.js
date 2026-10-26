import { initIcon } from "./icon.js";

//the url of the remove from queue outlined svg; resolved relative to this module
const URL_REMOVEFROMQUEUEOUTLINED = new URL('../../assets/icons/removeFromQueueOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove from queue outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeFromQueueOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveFromQueueOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REMOVEFROMQUEUEOUTLINED }, ...properties);
}

/**
 * Creates a remove from queue outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeFromQueueOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveFromQueueOutlinedIcon(element, ...properties);
    return element;
}
