import { initIcon } from "./icon.js";

//the url of the message svg; resolved relative to this module
const URL_MESSAGE = new URL('../../assets/icons/message.svg', import.meta.url).href;

/**
 * Initializes an icon element as a message icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/message.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMessageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MESSAGE }, ...properties);
}

/**
 * Creates a message icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const messageIcon = (...properties) => {
    const element = document.createElement('div');
    initMessageIcon(element, ...properties);
    return element;
}
