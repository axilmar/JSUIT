import { initIcon } from "./icon.js";

//the url of the local printshop svg; resolved relative to this module
const URL_LOCALPRINTSHOP = new URL('../../assets/icons/localPrintshop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local printshop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPrintshop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPrintshopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALPRINTSHOP }, ...properties);
}

/**
 * Creates a local printshop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPrintshopIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPrintshopIcon(element, ...properties);
    return element;
}
