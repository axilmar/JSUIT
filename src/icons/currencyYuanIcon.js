import { initIcon } from "./icon.js";

//the url of the currency yuan svg; resolved relative to this module
const URL_CURRENCYYUAN = new URL('../../assets/icons/currencyYuan.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency yuan icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyYuan.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyYuanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CURRENCYYUAN }, ...properties);
}

/**
 * Creates a currency yuan icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyYuanIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyYuanIcon(element, ...properties);
    return element;
}
