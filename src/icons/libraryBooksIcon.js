import { initIcon } from "./icon.js";

//the url of the library books svg; resolved relative to this module
const URL_LIBRARYBOOKS = new URL('../../assets/icons/libraryBooks.svg', import.meta.url).href;

/**
 * Initializes an icon element as a library books icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/libraryBooks.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLibraryBooksIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'libraryBooksIcon', url: URL_LIBRARYBOOKS }, ...properties);
}

/**
 * Creates a library books icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const libraryBooksIcon = (...properties) => {
    const element = document.createElement('div');
    initLibraryBooksIcon(element, ...properties);
    return element;
}
