import { initIcon } from "./icon.js";

//the url of the currency bitcoin outlined svg; resolved relative to this module
const URL_CURRENCYBITCOINOUTLINED = new URL('../../assets/icons/currencyBitcoinOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency bitcoin outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyBitcoinOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyBitcoinOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyBitcoinOutlinedIcon', url: URL_CURRENCYBITCOINOUTLINED }, ...properties);
}

/**
 * Creates a currency bitcoin outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyBitcoinOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyBitcoinOutlinedIcon(element, ...properties);
    return element;
}
