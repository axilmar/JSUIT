import { initIcon } from "./icon.js";

//the url of the currency yuan outlined svg; resolved relative to this module
const URL_CURRENCYYUANOUTLINED = new URL('../../assets/icons/currencyYuanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency yuan outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyYuanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyYuanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyYuanOutlinedIcon', url: URL_CURRENCYYUANOUTLINED }, ...properties);
}

/**
 * Creates a currency yuan outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyYuanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyYuanOutlinedIcon(element, ...properties);
    return element;
}
