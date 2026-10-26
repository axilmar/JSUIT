import { initIcon } from "./icon.js";

//the url of the currency exchange svg; resolved relative to this module
const URL_CURRENCYEXCHANGE = new URL('../../assets/icons/currencyExchange.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency exchange icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyExchange.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyExchangeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CURRENCYEXCHANGE }, ...properties);
}

/**
 * Creates a currency exchange icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyExchangeIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyExchangeIcon(element, ...properties);
    return element;
}
