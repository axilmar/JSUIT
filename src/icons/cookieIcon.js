import { initIcon } from "./icon.js";

//the url of the cookie svg; resolved relative to this module
const URL_COOKIE = new URL('../../assets/icons/cookie.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cookie icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cookie.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCookieIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cookieIcon', url: URL_COOKIE }, ...properties);
}

/**
 * Creates a cookie icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cookieIcon = (...properties) => {
    const element = document.createElement('div');
    initCookieIcon(element, ...properties);
    return element;
}
