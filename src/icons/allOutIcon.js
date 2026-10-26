import { initIcon } from "./icon.js";

//the url of the all out svg; resolved relative to this module
const URL_ALLOUT = new URL('../../assets/icons/allOut.svg', import.meta.url).href;

/**
 * Initializes an icon element as an all out icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/allOut.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAllOutIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALLOUT }, ...properties);
}

/**
 * Creates an all out icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const allOutIcon = (...properties) => {
    const element = document.createElement('div');
    initAllOutIcon(element, ...properties);
    return element;
}
