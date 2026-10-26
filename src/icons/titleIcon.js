import { initIcon } from "./icon.js";

//the url of the title svg; resolved relative to this module
const URL_TITLE = new URL('../../assets/icons/title.svg', import.meta.url).href;

/**
 * Initializes an icon element as a title icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/title.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTitleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TITLE }, ...properties);
}

/**
 * Creates a title icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const titleIcon = (...properties) => {
    const element = document.createElement('div');
    initTitleIcon(element, ...properties);
    return element;
}
