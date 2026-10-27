import { initIcon } from "./icon.js";

//the url of the bookmark add outlined svg; resolved relative to this module
const URL_BOOKMARKADDOUTLINED = new URL('../../assets/icons/bookmarkAddOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark add outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkAddOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkAddOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkAddOutlinedIcon', url: URL_BOOKMARKADDOUTLINED }, ...properties);
}

/**
 * Creates a bookmark add outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkAddOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkAddOutlinedIcon(element, ...properties);
    return element;
}
