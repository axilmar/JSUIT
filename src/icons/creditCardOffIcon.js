import { initIcon } from "./icon.js";

//the url of the credit card off svg; resolved relative to this module
const URL_CREDITCARDOFF = new URL('../../assets/icons/creditCardOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a credit card off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/creditCardOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreditCardOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'creditCardOffIcon', url: URL_CREDITCARDOFF }, ...properties);
}

/**
 * Creates a credit card off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const creditCardOffIcon = (...properties) => {
    const element = document.createElement('div');
    initCreditCardOffIcon(element, ...properties);
    return element;
}
