import { initIcon } from "./icon.js";

//the url of the library add check outlined svg; resolved relative to this module
const URL_LIBRARYADDCHECKOUTLINED = new URL('../../assets/icons/libraryAddCheckOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a library add check outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/libraryAddCheckOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLibraryAddCheckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIBRARYADDCHECKOUTLINED }, ...properties);
}

/**
 * Creates a library add check outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const libraryAddCheckOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLibraryAddCheckOutlinedIcon(element, ...properties);
    return element;
}
