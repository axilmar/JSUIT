import { initIcon } from "./icon.js";

//the url of the perm media svg; resolved relative to this module
const URL_PERMMEDIA = new URL('../../assets/icons/permMedia.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm media icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permMedia.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermMediaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERMMEDIA }, ...properties);
}

/**
 * Creates a perm media icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permMediaIcon = (...properties) => {
    const element = document.createElement('div');
    initPermMediaIcon(element, ...properties);
    return element;
}
