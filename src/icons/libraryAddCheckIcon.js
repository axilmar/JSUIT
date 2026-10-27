import { initIcon } from "./icon.js";

//the url of the library add check svg; resolved relative to this module
const URL_LIBRARYADDCHECK = new URL('../../assets/icons/libraryAddCheck.svg', import.meta.url).href;

/**
 * Initializes an icon element as a library add check icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/libraryAddCheck.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLibraryAddCheckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'libraryAddCheckIcon', url: URL_LIBRARYADDCHECK }, ...properties);
}

/**
 * Creates a library add check icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const libraryAddCheckIcon = (...properties) => {
    const element = document.createElement('div');
    initLibraryAddCheckIcon(element, ...properties);
    return element;
}
