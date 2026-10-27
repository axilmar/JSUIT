import { initIcon } from "./icon.js";

//the url of the content paste search svg; resolved relative to this module
const URL_CONTENTPASTESEARCH = new URL('../../assets/icons/contentPasteSearch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content paste search icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentPasteSearch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentPasteSearchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contentPasteSearchIcon', url: URL_CONTENTPASTESEARCH }, ...properties);
}

/**
 * Creates a content paste search icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentPasteSearchIcon = (...properties) => {
    const element = document.createElement('div');
    initContentPasteSearchIcon(element, ...properties);
    return element;
}
