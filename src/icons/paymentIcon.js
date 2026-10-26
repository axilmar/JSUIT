import { initIcon } from "./icon.js";

//the url of the payment svg; resolved relative to this module
const URL_PAYMENT = new URL('../../assets/icons/payment.svg', import.meta.url).href;

/**
 * Initializes an icon element as a payment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/payment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPaymentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAYMENT }, ...properties);
}

/**
 * Creates a payment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paymentIcon = (...properties) => {
    const element = document.createElement('div');
    initPaymentIcon(element, ...properties);
    return element;
}
