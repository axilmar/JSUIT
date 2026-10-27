import { initIcon } from "./icon.js";

//the url of the currency rupee svg; resolved relative to this module
const URL_CURRENCYRUPEE = new URL('../../assets/icons/currencyRupee.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency rupee icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyRupee.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyRupeeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyRupeeIcon', url: URL_CURRENCYRUPEE }, ...properties);
}

/**
 * Creates a currency rupee icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyRupeeIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyRupeeIcon(element, ...properties);
    return element;
}
