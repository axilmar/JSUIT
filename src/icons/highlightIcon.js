import { initIcon } from "./icon.js";

//the url of the highlight svg; resolved relative to this module
const URL_HIGHLIGHT = new URL('../../assets/icons/highlight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a highlight icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/highlight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHighlightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HIGHLIGHT }, ...properties);
}

/**
 * Creates a highlight icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const highlightIcon = (...properties) => {
    const element = document.createElement('div');
    initHighlightIcon(element, ...properties);
    return element;
}
