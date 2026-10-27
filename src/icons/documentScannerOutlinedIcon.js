import { initIcon } from "./icon.js";

//the url of the document scanner outlined svg; resolved relative to this module
const URL_DOCUMENTSCANNEROUTLINED = new URL('../../assets/icons/documentScannerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a document scanner outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/documentScannerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDocumentScannerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'documentScannerOutlinedIcon', url: URL_DOCUMENTSCANNEROUTLINED }, ...properties);
}

/**
 * Creates a document scanner outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const documentScannerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDocumentScannerOutlinedIcon(element, ...properties);
    return element;
}
