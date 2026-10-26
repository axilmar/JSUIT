import { initIcon } from "./icon.js";

//the url of the add to queue outlined svg; resolved relative to this module
const URL_ADDTOQUEUEOUTLINED = new URL('../../assets/icons/addToQueueOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add to queue outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addToQueueOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddToQueueOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDTOQUEUEOUTLINED }, ...properties);
}

/**
 * Creates an add to queue outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addToQueueOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddToQueueOutlinedIcon(element, ...properties);
    return element;
}
