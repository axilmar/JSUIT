import { initIcon } from "./icon.js";

//the url of the book online outlined svg; resolved relative to this module
const URL_BOOKONLINEOUTLINED = new URL('../../assets/icons/bookOnlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a book online outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookOnlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookOnlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookOnlineOutlinedIcon', url: URL_BOOKONLINEOUTLINED }, ...properties);
}

/**
 * Creates a book online outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookOnlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookOnlineOutlinedIcon(element, ...properties);
    return element;
}
