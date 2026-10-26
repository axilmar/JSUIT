import { initIcon } from "./icon.js";

//the url of the format quote outlined svg; resolved relative to this module
const URL_FORMATQUOTEOUTLINED = new URL('../../assets/icons/formatQuoteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format quote outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatQuoteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatQuoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATQUOTEOUTLINED }, ...properties);
}

/**
 * Creates a format quote outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatQuoteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatQuoteOutlinedIcon(element, ...properties);
    return element;
}
