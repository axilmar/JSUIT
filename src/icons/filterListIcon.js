import { initIcon } from "./icon.js";

//the url of the filter list svg; resolved relative to this module
const URL_FILTERLIST = new URL('../../assets/icons/filterList.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter list icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterList.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterListIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERLIST }, ...properties);
}

/**
 * Creates a filter list icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterListIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterListIcon(element, ...properties);
    return element;
}
