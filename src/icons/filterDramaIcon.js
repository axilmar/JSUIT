import { initIcon } from "./icon.js";

//the url of the filter drama svg; resolved relative to this module
const URL_FILTERDRAMA = new URL('../../assets/icons/filterDrama.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter drama icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterDrama.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterDramaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERDRAMA }, ...properties);
}

/**
 * Creates a filter drama icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterDramaIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterDramaIcon(element, ...properties);
    return element;
}
