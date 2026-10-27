import { initIcon } from "./icon.js";

//the url of the cached svg; resolved relative to this module
const URL_CACHED = new URL('../../assets/icons/cached.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cached icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cached.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCachedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cachedIcon', url: URL_CACHED }, ...properties);
}

/**
 * Creates a cached icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cachedIcon = (...properties) => {
    const element = document.createElement('div');
    initCachedIcon(element, ...properties);
    return element;
}
