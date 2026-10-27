import { initIcon } from "./icon.js";

//the url of the bookmark outlined svg; resolved relative to this module
const URL_BOOKMARKOUTLINED = new URL('../../assets/icons/bookmarkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkOutlinedIcon', url: URL_BOOKMARKOUTLINED }, ...properties);
}

/**
 * Creates a bookmark outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkOutlinedIcon(element, ...properties);
    return element;
}
