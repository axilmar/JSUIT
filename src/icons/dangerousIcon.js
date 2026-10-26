import { initIcon } from "./icon.js";

//the url of the dangerous svg; resolved relative to this module
const URL_DANGEROUS = new URL('../../assets/icons/dangerous.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dangerous icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dangerous.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDangerousIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DANGEROUS }, ...properties);
}

/**
 * Creates a dangerous icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dangerousIcon = (...properties) => {
    const element = document.createElement('div');
    initDangerousIcon(element, ...properties);
    return element;
}
