import { initIcon } from "./icon.js";

//the url of the adf scanner svg; resolved relative to this module
const URL_ADFSCANNER = new URL('../../assets/icons/adfScanner.svg', import.meta.url).href;

/**
 * Initializes an icon element as an adf scanner icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adfScanner.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdfScannerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADFSCANNER }, ...properties);
}

/**
 * Creates an adf scanner icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adfScannerIcon = (...properties) => {
    const element = document.createElement('div');
    initAdfScannerIcon(element, ...properties);
    return element;
}
