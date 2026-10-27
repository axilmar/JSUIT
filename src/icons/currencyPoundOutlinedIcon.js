import { initIcon } from "./icon.js";

//the url of the currency pound outlined svg; resolved relative to this module
const URL_CURRENCYPOUNDOUTLINED = new URL('../../assets/icons/currencyPoundOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency pound outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyPoundOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyPoundOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyPoundOutlinedIcon', url: URL_CURRENCYPOUNDOUTLINED }, ...properties);
}

/**
 * Creates a currency pound outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyPoundOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyPoundOutlinedIcon(element, ...properties);
    return element;
}
