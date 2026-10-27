import { initIcon } from "./icon.js";

//the url of the insert link svg; resolved relative to this module
const URL_INSERTLINK = new URL('../../assets/icons/insertLink.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert link icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertLink.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertLinkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertLinkIcon', url: URL_INSERTLINK }, ...properties);
}

/**
 * Creates an insert link icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertLinkIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertLinkIcon(element, ...properties);
    return element;
}
