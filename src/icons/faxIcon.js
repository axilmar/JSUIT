import { initIcon } from "./icon.js";

//the url of the fax svg; resolved relative to this module
const URL_FAX = new URL('../../assets/icons/fax.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fax icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fax.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFaxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FAX }, ...properties);
}

/**
 * Creates a fax icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const faxIcon = (...properties) => {
    const element = document.createElement('div');
    initFaxIcon(element, ...properties);
    return element;
}
