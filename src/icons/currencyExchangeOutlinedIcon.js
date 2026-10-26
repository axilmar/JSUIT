import { initIcon } from "./icon.js";

//the url of the currency exchange outlined svg; resolved relative to this module
const URL_CURRENCYEXCHANGEOUTLINED = new URL('../../assets/icons/currencyExchangeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency exchange outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyExchangeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyExchangeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CURRENCYEXCHANGEOUTLINED }, ...properties);
}

/**
 * Creates a currency exchange outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyExchangeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyExchangeOutlinedIcon(element, ...properties);
    return element;
}
