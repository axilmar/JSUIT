import { initIcon } from "./icon.js";

//the url of the bookmark remove outlined svg; resolved relative to this module
const URL_BOOKMARKREMOVEOUTLINED = new URL('../../assets/icons/bookmarkRemoveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark remove outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkRemoveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkRemoveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BOOKMARKREMOVEOUTLINED }, ...properties);
}

/**
 * Creates a bookmark remove outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkRemoveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkRemoveOutlinedIcon(element, ...properties);
    return element;
}
