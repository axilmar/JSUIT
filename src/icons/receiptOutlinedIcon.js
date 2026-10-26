import { initIcon } from "./icon.js";

//the url of the receipt outlined svg; resolved relative to this module
const URL_RECEIPTOUTLINED = new URL('../../assets/icons/receiptOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a receipt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/receiptOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReceiptOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RECEIPTOUTLINED }, ...properties);
}

/**
 * Creates a receipt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const receiptOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReceiptOutlinedIcon(element, ...properties);
    return element;
}
