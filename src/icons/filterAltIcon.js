import { initIcon } from "./icon.js";

//the url of the filter alt svg; resolved relative to this module
const URL_FILTERALT = new URL('../../assets/icons/filterAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERALT }, ...properties);
}

/**
 * Creates a filter alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterAltIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterAltIcon(element, ...properties);
    return element;
}
