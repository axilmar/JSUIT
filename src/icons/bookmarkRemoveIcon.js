import { initIcon } from "./icon.js";

//the url of the bookmark remove svg; resolved relative to this module
const URL_BOOKMARKREMOVE = new URL('../../assets/icons/bookmarkRemove.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark remove icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkRemove.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkRemoveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkRemoveIcon', url: URL_BOOKMARKREMOVE }, ...properties);
}

/**
 * Creates a bookmark remove icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkRemoveIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkRemoveIcon(element, ...properties);
    return element;
}
