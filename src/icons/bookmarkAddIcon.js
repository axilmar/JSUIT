import { initIcon } from "./icon.js";

//the url of the bookmark add svg; resolved relative to this module
const URL_BOOKMARKADD = new URL('../../assets/icons/bookmarkAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkAddIcon', url: URL_BOOKMARKADD }, ...properties);
}

/**
 * Creates a bookmark add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkAddIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkAddIcon(element, ...properties);
    return element;
}
