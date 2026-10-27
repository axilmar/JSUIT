import { initIcon } from "./icon.js";

//the url of the bookmark added outlined svg; resolved relative to this module
const URL_BOOKMARKADDEDOUTLINED = new URL('../../assets/icons/bookmarkAddedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark added outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkAddedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkAddedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkAddedOutlinedIcon', url: URL_BOOKMARKADDEDOUTLINED }, ...properties);
}

/**
 * Creates a bookmark added outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkAddedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkAddedOutlinedIcon(element, ...properties);
    return element;
}
