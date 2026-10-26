import { initIcon } from "./icon.js";

//the url of the support svg; resolved relative to this module
const URL_SUPPORT = new URL('../../assets/icons/support.svg', import.meta.url).href;

/**
 * Initializes an icon element as a support icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/support.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSupportIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUPPORT }, ...properties);
}

/**
 * Creates a support icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const supportIcon = (...properties) => {
    const element = document.createElement('div');
    initSupportIcon(element, ...properties);
    return element;
}
