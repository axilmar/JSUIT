import { initIcon } from "./icon.js";

//the url of the receipt svg; resolved relative to this module
const URL_RECEIPT = new URL('../../assets/icons/receipt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a receipt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/receipt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReceiptIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RECEIPT }, ...properties);
}

/**
 * Creates a receipt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const receiptIcon = (...properties) => {
    const element = document.createElement('div');
    initReceiptIcon(element, ...properties);
    return element;
}
