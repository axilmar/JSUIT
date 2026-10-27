import { initIcon } from "./icon.js";

//the url of the logout svg; resolved relative to this module
const URL_LOGOUT = new URL('../../assets/icons/logout.svg', import.meta.url).href;

/**
 * Initializes an icon element as a logout icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/logout.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLogoutIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'logoutIcon', url: URL_LOGOUT }, ...properties);
}

/**
 * Creates a logout icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const logoutIcon = (...properties) => {
    const element = document.createElement('div');
    initLogoutIcon(element, ...properties);
    return element;
}
