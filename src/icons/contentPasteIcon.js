import { initIcon } from "./icon.js";

//the url of the content paste svg; resolved relative to this module
const URL_CONTENTPASTE = new URL('../../assets/icons/contentPaste.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content paste icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentPaste.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentPasteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contentPasteIcon', url: URL_CONTENTPASTE }, ...properties);
}

/**
 * Creates a content paste icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentPasteIcon = (...properties) => {
    const element = document.createElement('div');
    initContentPasteIcon(element, ...properties);
    return element;
}
