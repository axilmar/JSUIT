import { initIcon } from "./icon.js";

//the url of the library add svg; resolved relative to this module
const URL_LIBRARYADD = new URL('../../assets/icons/libraryAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a library add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/libraryAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLibraryAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'libraryAddIcon', url: URL_LIBRARYADD }, ...properties);
}

/**
 * Creates a library add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const libraryAddIcon = (...properties) => {
    const element = document.createElement('div');
    initLibraryAddIcon(element, ...properties);
    return element;
}
