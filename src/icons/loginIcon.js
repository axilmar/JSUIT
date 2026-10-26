import { initIcon } from "./icon.js";

//the url of the login svg; resolved relative to this module
const URL_LOGIN = new URL('../../assets/icons/login.svg', import.meta.url).href;

/**
 * Initializes an icon element as a login icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/login.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLoginIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOGIN }, ...properties);
}

/**
 * Creates a login icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const loginIcon = (...properties) => {
    const element = document.createElement('div');
    initLoginIcon(element, ...properties);
    return element;
}
