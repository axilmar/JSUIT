import { initIcon } from "./icon.js";

//the url of the receipt long outlined svg; resolved relative to this module
const URL_RECEIPTLONGOUTLINED = new URL('../../assets/icons/receiptLongOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a receipt long outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/receiptLongOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReceiptLongOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'receiptLongOutlinedIcon', url: URL_RECEIPTLONGOUTLINED }, ...properties);
}

/**
 * Creates a receipt long outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const receiptLongOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReceiptLongOutlinedIcon(element, ...properties);
    return element;
}
