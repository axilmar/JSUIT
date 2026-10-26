import { initIcon } from "./icon.js";

//the url of the currency lira outlined svg; resolved relative to this module
const URL_CURRENCYLIRAOUTLINED = new URL('../../assets/icons/currencyLiraOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency lira outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyLiraOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyLiraOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CURRENCYLIRAOUTLINED }, ...properties);
}

/**
 * Creates a currency lira outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyLiraOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyLiraOutlinedIcon(element, ...properties);
    return element;
}
