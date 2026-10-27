import { initIcon } from "./icon.js";

//the url of the credit card outlined svg; resolved relative to this module
const URL_CREDITCARDOUTLINED = new URL('../../assets/icons/creditCardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a credit card outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/creditCardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreditCardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'creditCardOutlinedIcon', url: URL_CREDITCARDOUTLINED }, ...properties);
}

/**
 * Creates a credit card outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const creditCardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCreditCardOutlinedIcon(element, ...properties);
    return element;
}
