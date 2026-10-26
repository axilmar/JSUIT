import { initIcon } from "./icon.js";

//the url of the highlight outlined svg; resolved relative to this module
const URL_HIGHLIGHTOUTLINED = new URL('../../assets/icons/highlightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a highlight outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/highlightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHighlightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HIGHLIGHTOUTLINED }, ...properties);
}

/**
 * Creates a highlight outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const highlightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHighlightOutlinedIcon(element, ...properties);
    return element;
}
