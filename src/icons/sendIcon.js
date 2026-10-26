import { initIcon } from "./icon.js";

//the url of the send svg; resolved relative to this module
const URL_SEND = new URL('../../assets/icons/send.svg', import.meta.url).href;

/**
 * Initializes an icon element as a send icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/send.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSendIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SEND }, ...properties);
}

/**
 * Creates a send icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sendIcon = (...properties) => {
    const element = document.createElement('div');
    initSendIcon(element, ...properties);
    return element;
}
