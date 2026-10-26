import { initIcon } from "./icon.js";

//the url of the mark chat unread svg; resolved relative to this module
const URL_MARKCHATUNREAD = new URL('../../assets/icons/markChatUnread.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark chat unread icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markChatUnread.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkChatUnreadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKCHATUNREAD }, ...properties);
}

/**
 * Creates a mark chat unread icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markChatUnreadIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkChatUnreadIcon(element, ...properties);
    return element;
}
