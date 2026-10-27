import { initIcon } from "./icon.js";

//the url of the currency lira svg; resolved relative to this module
const URL_CURRENCYLIRA = new URL('../../assets/icons/currencyLira.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency lira icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyLira.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyLiraIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyLiraIcon', url: URL_CURRENCYLIRA }, ...properties);
}

/**
 * Creates a currency lira icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyLiraIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyLiraIcon(element, ...properties);
    return element;
}
