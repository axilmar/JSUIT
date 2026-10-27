import { initIcon } from "./icon.js";

//the url of the bookmark border svg; resolved relative to this module
const URL_BOOKMARKBORDER = new URL('../../assets/icons/bookmarkBorder.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark border icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkBorder.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkBorderIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkBorderIcon', url: URL_BOOKMARKBORDER }, ...properties);
}

/**
 * Creates a bookmark border icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkBorderIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkBorderIcon(element, ...properties);
    return element;
}
