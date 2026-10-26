import { initIcon } from "./icon.js";

//the url of the nfc outlined svg; resolved relative to this module
const URL_NFCOUTLINED = new URL('../../assets/icons/nfcOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nfc outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nfcOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNfcOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NFCOUTLINED }, ...properties);
}

/**
 * Creates a nfc outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nfcOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNfcOutlinedIcon(element, ...properties);
    return element;
}
