import { initIcon } from "./icon.js";

//the url of the api svg; resolved relative to this module
const URL_API = new URL('../../assets/icons/api.svg', import.meta.url).href;

/**
 * Initializes an icon element as an api icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/api.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initApiIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'apiIcon', url: URL_API }, ...properties);
}

/**
 * Creates an api icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const apiIcon = (...properties) => {
    const element = document.createElement('div');
    initApiIcon(element, ...properties);
    return element;
}
