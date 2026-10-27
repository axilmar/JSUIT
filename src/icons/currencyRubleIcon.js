import { initIcon } from "./icon.js";

//the url of the currency ruble svg; resolved relative to this module
const URL_CURRENCYRUBLE = new URL('../../assets/icons/currencyRuble.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency ruble icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyRuble.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyRubleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyRubleIcon', url: URL_CURRENCYRUBLE }, ...properties);
}

/**
 * Creates a currency ruble icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyRubleIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyRubleIcon(element, ...properties);
    return element;
}
