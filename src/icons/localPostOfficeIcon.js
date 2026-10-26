import { initIcon } from "./icon.js";

//the url of the local post office svg; resolved relative to this module
const URL_LOCALPOSTOFFICE = new URL('../../assets/icons/localPostOffice.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local post office icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPostOffice.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPostOfficeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALPOSTOFFICE }, ...properties);
}

/**
 * Creates a local post office icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPostOfficeIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPostOfficeIcon(element, ...properties);
    return element;
}
