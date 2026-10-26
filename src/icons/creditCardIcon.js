import { initIcon } from "./icon.js";

//the url of the credit card svg; resolved relative to this module
const URL_CREDITCARD = new URL('../../assets/icons/creditCard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a credit card icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/creditCard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreditCardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CREDITCARD }, ...properties);
}

/**
 * Creates a credit card icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const creditCardIcon = (...properties) => {
    const element = document.createElement('div');
    initCreditCardIcon(element, ...properties);
    return element;
}
