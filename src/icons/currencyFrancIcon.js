import { initIcon } from "./icon.js";

//the url of the currency franc svg; resolved relative to this module
const URL_CURRENCYFRANC = new URL('../../assets/icons/currencyFranc.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency franc icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyFranc.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyFrancIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CURRENCYFRANC }, ...properties);
}

/**
 * Creates a currency franc icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyFrancIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyFrancIcon(element, ...properties);
    return element;
}
