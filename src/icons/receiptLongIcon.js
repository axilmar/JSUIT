import { initIcon } from "./icon.js";

//the url of the receipt long svg; resolved relative to this module
const URL_RECEIPTLONG = new URL('../../assets/icons/receiptLong.svg', import.meta.url).href;

/**
 * Initializes an icon element as a receipt long icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/receiptLong.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReceiptLongIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'receiptLongIcon', url: URL_RECEIPTLONG }, ...properties);
}

/**
 * Creates a receipt long icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const receiptLongIcon = (...properties) => {
    const element = document.createElement('div');
    initReceiptLongIcon(element, ...properties);
    return element;
}
