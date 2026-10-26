import { initIcon } from "./icon.js";

//the url of the one kk svg; resolved relative to this module
const URL_ONEKK = new URL('../../assets/icons/oneKk.svg', import.meta.url).href;

/**
 * Initializes an icon element as an one kk icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/oneKk.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOneKkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ONEKK }, ...properties);
}

/**
 * Creates an one kk icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const oneKkIcon = (...properties) => {
    const element = document.createElement('div');
    initOneKkIcon(element, ...properties);
    return element;
}
