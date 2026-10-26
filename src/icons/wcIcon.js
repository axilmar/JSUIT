import { initIcon } from "./icon.js";

//the url of the wc svg; resolved relative to this module
const URL_WC = new URL('../../assets/icons/wc.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wc icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wc.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWcIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WC }, ...properties);
}

/**
 * Creates a wc icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wcIcon = (...properties) => {
    const element = document.createElement('div');
    initWcIcon(element, ...properties);
    return element;
}
