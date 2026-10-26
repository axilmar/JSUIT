import { initIcon } from "./icon.js";

//the url of the content paste go svg; resolved relative to this module
const URL_CONTENTPASTEGO = new URL('../../assets/icons/contentPasteGo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content paste go icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentPasteGo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentPasteGoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTENTPASTEGO }, ...properties);
}

/**
 * Creates a content paste go icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentPasteGoIcon = (...properties) => {
    const element = document.createElement('div');
    initContentPasteGoIcon(element, ...properties);
    return element;
}
