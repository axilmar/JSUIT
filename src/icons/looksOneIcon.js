import { initIcon } from "./icon.js";

//the url of the looks one svg; resolved relative to this module
const URL_LOOKSONE = new URL('../../assets/icons/looksOne.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks one icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looksOne.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooksOneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOOKSONE }, ...properties);
}

/**
 * Creates a looks one icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looksOneIcon = (...properties) => {
    const element = document.createElement('div');
    initLooksOneIcon(element, ...properties);
    return element;
}
