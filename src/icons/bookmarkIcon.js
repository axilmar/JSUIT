import { initIcon } from "./icon.js";

//the url of the bookmark svg; resolved relative to this module
const URL_BOOKMARK = new URL('../../assets/icons/bookmark.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmark.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkIcon', url: URL_BOOKMARK }, ...properties);
}

/**
 * Creates a bookmark icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkIcon(element, ...properties);
    return element;
}
