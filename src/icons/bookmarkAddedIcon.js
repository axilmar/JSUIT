import { initIcon } from "./icon.js";

//the url of the bookmark added svg; resolved relative to this module
const URL_BOOKMARKADDED = new URL('../../assets/icons/bookmarkAdded.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark added icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkAdded.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkAddedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkAddedIcon', url: URL_BOOKMARKADDED }, ...properties);
}

/**
 * Creates a bookmark added icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkAddedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkAddedIcon(element, ...properties);
    return element;
}
