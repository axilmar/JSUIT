import { initIcon } from "./icon.js";

//the url of the currency rupee outlined svg; resolved relative to this module
const URL_CURRENCYRUPEEOUTLINED = new URL('../../assets/icons/currencyRupeeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency rupee outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyRupeeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyRupeeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyRupeeOutlinedIcon', url: URL_CURRENCYRUPEEOUTLINED }, ...properties);
}

/**
 * Creates a currency rupee outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyRupeeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyRupeeOutlinedIcon(element, ...properties);
    return element;
}
