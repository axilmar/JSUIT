import { initIcon } from "./icon.js";

//the url of the pages svg; resolved relative to this module
const URL_PAGES = new URL('../../assets/icons/pages.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pages icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pages.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPagesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pagesIcon', url: URL_PAGES }, ...properties);
}

/**
 * Creates a pages icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pagesIcon = (...properties) => {
    const element = document.createElement('div');
    initPagesIcon(element, ...properties);
    return element;
}
