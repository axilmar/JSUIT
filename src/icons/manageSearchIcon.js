import { initIcon } from "./icon.js";

//the url of the manage search svg; resolved relative to this module
const URL_MANAGESEARCH = new URL('../../assets/icons/manageSearch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a manage search icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/manageSearch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initManageSearchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'manageSearchIcon', url: URL_MANAGESEARCH }, ...properties);
}

/**
 * Creates a manage search icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const manageSearchIcon = (...properties) => {
    const element = document.createElement('div');
    initManageSearchIcon(element, ...properties);
    return element;
}
