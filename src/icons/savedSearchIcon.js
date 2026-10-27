import { initIcon } from "./icon.js";

//the url of the saved search svg; resolved relative to this module
const URL_SAVEDSEARCH = new URL('../../assets/icons/savedSearch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a saved search icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/savedSearch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSavedSearchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'savedSearchIcon', url: URL_SAVEDSEARCH }, ...properties);
}

/**
 * Creates a saved search icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const savedSearchIcon = (...properties) => {
    const element = document.createElement('div');
    initSavedSearchIcon(element, ...properties);
    return element;
}
