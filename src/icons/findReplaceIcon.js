import { initIcon } from "./icon.js";

//the url of the find replace svg; resolved relative to this module
const URL_FINDREPLACE = new URL('../../assets/icons/findReplace.svg', import.meta.url).href;

/**
 * Initializes an icon element as a find replace icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/findReplace.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFindReplaceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FINDREPLACE }, ...properties);
}

/**
 * Creates a find replace icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const findReplaceIcon = (...properties) => {
    const element = document.createElement('div');
    initFindReplaceIcon(element, ...properties);
    return element;
}
