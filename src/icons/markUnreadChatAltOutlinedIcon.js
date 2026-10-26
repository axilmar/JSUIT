import { initIcon } from "./icon.js";

//the url of the mark unread chat alt outlined svg; resolved relative to this module
const URL_MARKUNREADCHATALTOUTLINED = new URL('../../assets/icons/markUnreadChatAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark unread chat alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markUnreadChatAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkUnreadChatAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKUNREADCHATALTOUTLINED }, ...properties);
}

/**
 * Creates a mark unread chat alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markUnreadChatAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkUnreadChatAltOutlinedIcon(element, ...properties);
    return element;
}
