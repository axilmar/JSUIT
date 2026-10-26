import { initIcon } from "./icon.js";

//the url of the scanner svg; resolved relative to this module
const URL_SCANNER = new URL('../../assets/icons/scanner.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scanner icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scanner.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScannerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCANNER }, ...properties);
}

/**
 * Creates a scanner icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scannerIcon = (...properties) => {
    const element = document.createElement('div');
    initScannerIcon(element, ...properties);
    return element;
}
