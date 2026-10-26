import { initIcon } from "./icon.js";

//the url of the document scanner svg; resolved relative to this module
const URL_DOCUMENTSCANNER = new URL('../../assets/icons/documentScanner.svg', import.meta.url).href;

/**
 * Initializes an icon element as a document scanner icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/documentScanner.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDocumentScannerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOCUMENTSCANNER }, ...properties);
}

/**
 * Creates a document scanner icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const documentScannerIcon = (...properties) => {
    const element = document.createElement('div');
    initDocumentScannerIcon(element, ...properties);
    return element;
}
