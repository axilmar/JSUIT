import { initIcon } from "./icon.js";

//the url of the book online svg; resolved relative to this module
const URL_BOOKONLINE = new URL('../../assets/icons/bookOnline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a book online icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookOnline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookOnlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BOOKONLINE }, ...properties);
}

/**
 * Creates a book online icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookOnlineIcon = (...properties) => {
    const element = document.createElement('div');
    initBookOnlineIcon(element, ...properties);
    return element;
}
