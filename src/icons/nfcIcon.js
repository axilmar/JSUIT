import { initIcon } from "./icon.js";

//the url of the nfc svg; resolved relative to this module
const URL_NFC = new URL('../../assets/icons/nfc.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nfc icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nfc.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNfcIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NFC }, ...properties);
}

/**
 * Creates a nfc icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nfcIcon = (...properties) => {
    const element = document.createElement('div');
    initNfcIcon(element, ...properties);
    return element;
}
