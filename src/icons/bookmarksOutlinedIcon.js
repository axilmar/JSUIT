import { initIcon } from "./icon.js";

//the url of the bookmarks outlined svg; resolved relative to this module
const URL_BOOKMARKSOUTLINED = new URL('../../assets/icons/bookmarksOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmarks outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarksOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarksOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarksOutlinedIcon', url: URL_BOOKMARKSOUTLINED }, ...properties);
}

/**
 * Creates a bookmarks outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarksOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarksOutlinedIcon(element, ...properties);
    return element;
}
