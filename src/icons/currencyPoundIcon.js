import { initIcon } from "./icon.js";

//the url of the currency pound svg; resolved relative to this module
const URL_CURRENCYPOUND = new URL('../../assets/icons/currencyPound.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency pound icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyPound.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyPoundIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CURRENCYPOUND }, ...properties);
}

/**
 * Creates a currency pound icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyPoundIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyPoundIcon(element, ...properties);
    return element;
}
