import { initIcon } from "./icon.js";

//the url of the bookmarks svg; resolved relative to this module
const URL_BOOKMARKS = new URL('../../assets/icons/bookmarks.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmarks icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarks.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarksIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarksIcon', url: URL_BOOKMARKS }, ...properties);
}

/**
 * Creates a bookmarks icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarksIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarksIcon(element, ...properties);
    return element;
}
