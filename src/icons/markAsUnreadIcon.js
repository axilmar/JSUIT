import { initIcon } from "./icon.js";

//the url of the mark as unread svg; resolved relative to this module
const URL_MARKASUNREAD = new URL('../../assets/icons/markAsUnread.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark as unread icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markAsUnread.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkAsUnreadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKASUNREAD }, ...properties);
}

/**
 * Creates a mark as unread icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markAsUnreadIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkAsUnreadIcon(element, ...properties);
    return element;
}
