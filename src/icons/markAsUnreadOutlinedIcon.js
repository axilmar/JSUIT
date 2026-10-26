import { initIcon } from "./icon.js";

//the url of the mark as unread outlined svg; resolved relative to this module
const URL_MARKASUNREADOUTLINED = new URL('../../assets/icons/markAsUnreadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark as unread outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markAsUnreadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkAsUnreadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKASUNREADOUTLINED }, ...properties);
}

/**
 * Creates a mark as unread outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markAsUnreadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkAsUnreadOutlinedIcon(element, ...properties);
    return element;
}
