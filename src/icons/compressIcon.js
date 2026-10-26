import { initIcon } from "./icon.js";

//the url of the compress svg; resolved relative to this module
const URL_COMPRESS = new URL('../../assets/icons/compress.svg', import.meta.url).href;

/**
 * Initializes an icon element as a compress icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/compress.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCompressIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMPRESS }, ...properties);
}

/**
 * Creates a compress icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const compressIcon = (...properties) => {
    const element = document.createElement('div');
    initCompressIcon(element, ...properties);
    return element;
}
