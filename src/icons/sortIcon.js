import { initIcon } from "./icon.js";

//the url of the sort svg; resolved relative to this module
const URL_SORT = new URL('../../assets/icons/sort.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sort icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sort.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSortIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sortIcon', url: URL_SORT }, ...properties);
}

/**
 * Creates a sort icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sortIcon = (...properties) => {
    const element = document.createElement('div');
    initSortIcon(element, ...properties);
    return element;
}
