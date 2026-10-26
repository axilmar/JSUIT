import { initIcon } from "./icon.js";

//the url of the content cut svg; resolved relative to this module
const URL_CONTENTCUT = new URL('../../assets/icons/contentCut.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content cut icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentCut.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentCutIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTENTCUT }, ...properties);
}

/**
 * Creates a content cut icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentCutIcon = (...properties) => {
    const element = document.createElement('div');
    initContentCutIcon(element, ...properties);
    return element;
}
