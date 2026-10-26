import { initIcon } from "./icon.js";

//the url of the business svg; resolved relative to this module
const URL_BUSINESS = new URL('../../assets/icons/business.svg', import.meta.url).href;

/**
 * Initializes an icon element as a business icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/business.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBusinessIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUSINESS }, ...properties);
}

/**
 * Creates a business icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const businessIcon = (...properties) => {
    const element = document.createElement('div');
    initBusinessIcon(element, ...properties);
    return element;
}
