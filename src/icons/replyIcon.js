import { initIcon } from "./icon.js";

//the url of the reply svg; resolved relative to this module
const URL_REPLY = new URL('../../assets/icons/reply.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reply icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reply.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPLY }, ...properties);
}

/**
 * Creates a reply icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replyIcon = (...properties) => {
    const element = document.createElement('div');
    initReplyIcon(element, ...properties);
    return element;
}
