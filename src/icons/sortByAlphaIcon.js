import { initIcon } from "./icon.js";

//the url of the sort by alpha svg; resolved relative to this module
const URL_SORTBYALPHA = new URL('../../assets/icons/sortByAlpha.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sort by alpha icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sortByAlpha.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSortByAlphaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SORTBYALPHA }, ...properties);
}

/**
 * Creates a sort by alpha icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sortByAlphaIcon = (...properties) => {
    const element = document.createElement('div');
    initSortByAlphaIcon(element, ...properties);
    return element;
}
