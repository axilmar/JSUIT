import { initIcon } from "./icon.js";

//the url of the book svg; resolved relative to this module
const URL_BOOK = new URL('../../assets/icons/book.svg', import.meta.url).href;

/**
 * Initializes an icon element as a book icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/book.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bookIcon', url: URL_BOOK }, ...properties);
}

/**
 * Creates a book icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookIcon = (...properties) => {
    const element = document.createElement('div');
    initBookIcon(element, ...properties);
    return element;
}
