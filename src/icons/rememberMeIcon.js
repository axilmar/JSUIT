import { initIcon } from "./icon.js";

//the url of the remember me svg; resolved relative to this module
const URL_REMEMBERME = new URL('../../assets/icons/rememberMe.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remember me icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rememberMe.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRememberMeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rememberMeIcon', url: URL_REMEMBERME }, ...properties);
}

/**
 * Creates a remember me icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rememberMeIcon = (...properties) => {
    const element = document.createElement('div');
    initRememberMeIcon(element, ...properties);
    return element;
}
