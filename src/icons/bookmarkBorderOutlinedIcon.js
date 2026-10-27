import { initIcon } from "./icon.js";

//the url of the bookmark border outlined svg; resolved relative to this module
const URL_BOOKMARKBORDEROUTLINED = new URL('../../assets/icons/bookmarkBorderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bookmark border outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookmarkBorderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookmarkBorderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookmarkBorderOutlinedIcon', url: URL_BOOKMARKBORDEROUTLINED }, ...properties);
}

/**
 * Creates a bookmark border outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookmarkBorderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookmarkBorderOutlinedIcon(element, ...properties);
    return element;
}
