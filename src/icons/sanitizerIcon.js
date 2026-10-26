import { initIcon } from "./icon.js";

//the url of the sanitizer svg; resolved relative to this module
const URL_SANITIZER = new URL('../../assets/icons/sanitizer.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sanitizer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sanitizer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSanitizerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SANITIZER }, ...properties);
}

/**
 * Creates a sanitizer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sanitizerIcon = (...properties) => {
    const element = document.createElement('div');
    initSanitizerIcon(element, ...properties);
    return element;
}
