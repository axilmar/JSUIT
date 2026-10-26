import { initIcon } from "./icon.js";

//the url of the content copy svg; resolved relative to this module
const URL_CONTENTCOPY = new URL('../../assets/icons/contentCopy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content copy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentCopy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentCopyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTENTCOPY }, ...properties);
}

/**
 * Creates a content copy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentCopyIcon = (...properties) => {
    const element = document.createElement('div');
    initContentCopyIcon(element, ...properties);
    return element;
}
