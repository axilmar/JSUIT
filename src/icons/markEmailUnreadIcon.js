import { initIcon } from "./icon.js";

//the url of the mark email unread svg; resolved relative to this module
const URL_MARKEMAILUNREAD = new URL('../../assets/icons/markEmailUnread.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark email unread icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markEmailUnread.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkEmailUnreadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKEMAILUNREAD }, ...properties);
}

/**
 * Creates a mark email unread icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markEmailUnreadIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkEmailUnreadIcon(element, ...properties);
    return element;
}
