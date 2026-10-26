import { initIcon } from "./icon.js";

//the url of the payments svg; resolved relative to this module
const URL_PAYMENTS = new URL('../../assets/icons/payments.svg', import.meta.url).href;

/**
 * Initializes an icon element as a payments icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/payments.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPaymentsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAYMENTS }, ...properties);
}

/**
 * Creates a payments icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paymentsIcon = (...properties) => {
    const element = document.createElement('div');
    initPaymentsIcon(element, ...properties);
    return element;
}
