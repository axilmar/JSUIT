import { initIcon } from "./icon.js";

//the url of the filter svg; resolved relative to this module
const URL_FILTER = new URL('../../assets/icons/filter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTER }, ...properties);
}

/**
 * Creates a filter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterIcon(element, ...properties);
    return element;
}
