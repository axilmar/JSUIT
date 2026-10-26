import { initIcon } from "./icon.js";

//the url of the currency yen svg; resolved relative to this module
const URL_CURRENCYYEN = new URL('../../assets/icons/currencyYen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency yen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyYen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyYenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CURRENCYYEN }, ...properties);
}

/**
 * Creates a currency yen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyYenIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyYenIcon(element, ...properties);
    return element;
}
