import { initIcon } from "./icon.js";

//the url of the inbox svg; resolved relative to this module
const URL_INBOX = new URL('../../assets/icons/inbox.svg', import.meta.url).href;

/**
 * Initializes an icon element as an inbox icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/inbox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInboxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INBOX }, ...properties);
}

/**
 * Creates an inbox icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const inboxIcon = (...properties) => {
    const element = document.createElement('div');
    initInboxIcon(element, ...properties);
    return element;
}
