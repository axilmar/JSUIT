import { initIcon } from "./icon.js";

//the url of the skip next svg; resolved relative to this module
const URL_SKIPNEXT = new URL('../../assets/icons/skipNext.svg', import.meta.url).href;

/**
 * Initializes an icon element as a skip next icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/skipNext.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSkipNextIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SKIPNEXT }, ...properties);
}

/**
 * Creates a skip next icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const skipNextIcon = (...properties) => {
    const element = document.createElement('div');
    initSkipNextIcon(element, ...properties);
    return element;
}
