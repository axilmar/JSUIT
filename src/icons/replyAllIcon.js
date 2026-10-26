import { initIcon } from "./icon.js";

//the url of the reply all svg; resolved relative to this module
const URL_REPLYALL = new URL('../../assets/icons/replyAll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reply all icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replyAll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplyAllIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPLYALL }, ...properties);
}

/**
 * Creates a reply all icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replyAllIcon = (...properties) => {
    const element = document.createElement('div');
    initReplyAllIcon(element, ...properties);
    return element;
}
