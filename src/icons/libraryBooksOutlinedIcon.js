import { initIcon } from "./icon.js";

//the url of the library books outlined svg; resolved relative to this module
const URL_LIBRARYBOOKSOUTLINED = new URL('../../assets/icons/libraryBooksOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a library books outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/libraryBooksOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLibraryBooksOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIBRARYBOOKSOUTLINED }, ...properties);
}

/**
 * Creates a library books outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const libraryBooksOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLibraryBooksOutlinedIcon(element, ...properties);
    return element;
}
