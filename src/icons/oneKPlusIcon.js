import { initIcon } from "./icon.js";

//the url of the one k plus svg; resolved relative to this module
const URL_ONEKPLUS = new URL('../../assets/icons/oneKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as an one k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/oneKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOneKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ONEKPLUS }, ...properties);
}

/**
 * Creates an one k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const oneKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initOneKPlusIcon(element, ...properties);
    return element;
}
