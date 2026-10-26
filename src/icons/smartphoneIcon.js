import { initIcon } from "./icon.js";

//the url of the smartphone svg; resolved relative to this module
const URL_SMARTPHONE = new URL('../../assets/icons/smartphone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smartphone icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartphone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartphoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMARTPHONE }, ...properties);
}

/**
 * Creates a smartphone icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartphoneIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartphoneIcon(element, ...properties);
    return element;
}
