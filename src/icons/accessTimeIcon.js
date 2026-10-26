import { initIcon } from "./icon.js";

//the url of the access time svg; resolved relative to this module
const URL_ACCESSTIME = new URL('../../assets/icons/accessTime.svg', import.meta.url).href;

/**
 * Initializes an icon element as an access time icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessTime.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessTimeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCESSTIME }, ...properties);
}

/**
 * Creates an access time icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessTimeIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessTimeIcon(element, ...properties);
    return element;
}
