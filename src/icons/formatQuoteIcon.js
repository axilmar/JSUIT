import { initIcon } from "./icon.js";

//the url of the format quote svg; resolved relative to this module
const URL_FORMATQUOTE = new URL('../../assets/icons/formatQuote.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format quote icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatQuote.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatQuoteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATQUOTE }, ...properties);
}

/**
 * Creates a format quote icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatQuoteIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatQuoteIcon(element, ...properties);
    return element;
}
