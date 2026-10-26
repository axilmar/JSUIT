import { initIcon } from "./icon.js";

//the url of the scanner outlined svg; resolved relative to this module
const URL_SCANNEROUTLINED = new URL('../../assets/icons/scannerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scanner outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scannerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScannerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCANNEROUTLINED }, ...properties);
}

/**
 * Creates a scanner outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scannerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScannerOutlinedIcon(element, ...properties);
    return element;
}
