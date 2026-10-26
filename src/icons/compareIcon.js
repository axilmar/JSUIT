import { initIcon } from "./icon.js";

//the url of the compare svg; resolved relative to this module
const URL_COMPARE = new URL('../../assets/icons/compare.svg', import.meta.url).href;

/**
 * Initializes an icon element as a compare icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/compare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCompareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMPARE }, ...properties);
}

/**
 * Creates a compare icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const compareIcon = (...properties) => {
    const element = document.createElement('div');
    initCompareIcon(element, ...properties);
    return element;
}
