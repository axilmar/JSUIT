import { initIcon } from "./icon.js";

//the url of the skip previous svg; resolved relative to this module
const URL_SKIPPREVIOUS = new URL('../../assets/icons/skipPrevious.svg', import.meta.url).href;

/**
 * Initializes an icon element as a skip previous icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/skipPrevious.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSkipPreviousIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'skipPreviousIcon', url: URL_SKIPPREVIOUS }, ...properties);
}

/**
 * Creates a skip previous icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const skipPreviousIcon = (...properties) => {
    const element = document.createElement('div');
    initSkipPreviousIcon(element, ...properties);
    return element;
}
