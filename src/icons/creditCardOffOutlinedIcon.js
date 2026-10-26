import { initIcon } from "./icon.js";

//the url of the credit card off outlined svg; resolved relative to this module
const URL_CREDITCARDOFFOUTLINED = new URL('../../assets/icons/creditCardOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a credit card off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/creditCardOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreditCardOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CREDITCARDOFFOUTLINED }, ...properties);
}

/**
 * Creates a credit card off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const creditCardOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCreditCardOffOutlinedIcon(element, ...properties);
    return element;
}
