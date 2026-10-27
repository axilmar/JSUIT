import { initIcon } from "./icon.js";

//the url of the print svg; resolved relative to this module
const URL_PRINT = new URL('../../assets/icons/print.svg', import.meta.url).href;

/**
 * Initializes an icon element as a print icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/print.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPrintIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'printIcon', url: URL_PRINT }, ...properties);
}

/**
 * Creates a print icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const printIcon = (...properties) => {
    const element = document.createElement('div');
    initPrintIcon(element, ...properties);
    return element;
}
