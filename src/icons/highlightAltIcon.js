import { initIcon } from "./icon.js";

//the url of the highlight alt svg; resolved relative to this module
const URL_HIGHLIGHTALT = new URL('../../assets/icons/highlightAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a highlight alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/highlightAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHighlightAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'highlightAltIcon', url: URL_HIGHLIGHTALT }, ...properties);
}

/**
 * Creates a highlight alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const highlightAltIcon = (...properties) => {
    const element = document.createElement('div');
    initHighlightAltIcon(element, ...properties);
    return element;
}
