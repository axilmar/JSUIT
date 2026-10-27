import { initIcon } from "./icon.js";

//the url of the mark chat unread outlined svg; resolved relative to this module
const URL_MARKCHATUNREADOUTLINED = new URL('../../assets/icons/markChatUnreadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark chat unread outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markChatUnreadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkChatUnreadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'markChatUnreadOutlinedIcon', url: URL_MARKCHATUNREADOUTLINED }, ...properties);
}

/**
 * Creates a mark chat unread outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markChatUnreadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkChatUnreadOutlinedIcon(element, ...properties);
    return element;
}
