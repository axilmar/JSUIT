import { initIcon } from "./icon.js";

//the url of the crib svg; resolved relative to this module
const URL_CRIB = new URL('../../assets/icons/crib.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crib icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crib.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCribIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cribIcon', url: URL_CRIB }, ...properties);
}

/**
 * Creates a crib icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cribIcon = (...properties) => {
    const element = document.createElement('div');
    initCribIcon(element, ...properties);
    return element;
}
