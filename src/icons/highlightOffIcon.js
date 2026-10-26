import { initIcon } from "./icon.js";

//the url of the highlight off svg; resolved relative to this module
const URL_HIGHLIGHTOFF = new URL('../../assets/icons/highlightOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a highlight off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/highlightOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHighlightOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HIGHLIGHTOFF }, ...properties);
}

/**
 * Creates a highlight off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const highlightOffIcon = (...properties) => {
    const element = document.createElement('div');
    initHighlightOffIcon(element, ...properties);
    return element;
}
