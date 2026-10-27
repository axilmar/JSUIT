import { initIcon } from "./icon.js";

//the url of the currency bitcoin svg; resolved relative to this module
const URL_CURRENCYBITCOIN = new URL('../../assets/icons/currencyBitcoin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency bitcoin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyBitcoin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyBitcoinIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyBitcoinIcon', url: URL_CURRENCYBITCOIN }, ...properties);
}

/**
 * Creates a currency bitcoin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyBitcoinIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyBitcoinIcon(element, ...properties);
    return element;
}
