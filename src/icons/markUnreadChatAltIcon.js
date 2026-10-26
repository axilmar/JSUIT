import { initIcon } from "./icon.js";

//the url of the mark unread chat alt svg; resolved relative to this module
const URL_MARKUNREADCHATALT = new URL('../../assets/icons/markUnreadChatAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark unread chat alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markUnreadChatAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkUnreadChatAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKUNREADCHATALT }, ...properties);
}

/**
 * Creates a mark unread chat alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markUnreadChatAltIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkUnreadChatAltIcon(element, ...properties);
    return element;
}
