import { initIcon } from "./icon.js";

//the url of the cases svg; resolved relative to this module
const URL_CASES = new URL('../../assets/icons/cases.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cases icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cases.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCasesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CASES }, ...properties);
}

/**
 * Creates a cases icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const casesIcon = (...properties) => {
    const element = document.createElement('div');
    initCasesIcon(element, ...properties);
    return element;
}
