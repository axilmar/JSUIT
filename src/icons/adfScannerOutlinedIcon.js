import { initIcon } from "./icon.js";

//the url of the adf scanner outlined svg; resolved relative to this module
const URL_ADFSCANNEROUTLINED = new URL('../../assets/icons/adfScannerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an adf scanner outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adfScannerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdfScannerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'adfScannerOutlinedIcon', url: URL_ADFSCANNEROUTLINED }, ...properties);
}

/**
 * Creates an adf scanner outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adfScannerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAdfScannerOutlinedIcon(element, ...properties);
    return element;
}
