import { initIcon } from "./icon.js";

//the url of the search svg; resolved relative to this module
const URL_SEARCH = new URL('../../assets/icons/search.svg', import.meta.url).href;

/**
 * Initializes an icon element as a search icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/search.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSearchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'searchIcon', url: URL_SEARCH }, ...properties);
}

/**
 * Creates a search icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const searchIcon = (...properties) => {
    const element = document.createElement('div');
    initSearchIcon(element, ...properties);
    return element;
}
