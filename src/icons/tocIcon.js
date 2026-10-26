import { initIcon } from "./icon.js";

//the url of the toc svg; resolved relative to this module
const URL_TOC = new URL('../../assets/icons/toc.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toc icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/toc.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTocIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TOC }, ...properties);
}

/**
 * Creates a toc icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tocIcon = (...properties) => {
    const element = document.createElement('div');
    initTocIcon(element, ...properties);
    return element;
}
