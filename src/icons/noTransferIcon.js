import { initIcon } from "./icon.js";

//the url of the no transfer svg; resolved relative to this module
const URL_NOTRANSFER = new URL('../../assets/icons/noTransfer.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no transfer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noTransfer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoTransferIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTRANSFER }, ...properties);
}

/**
 * Creates a no transfer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noTransferIcon = (...properties) => {
    const element = document.createElement('div');
    initNoTransferIcon(element, ...properties);
    return element;
}
