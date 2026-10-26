import { initIcon } from "./icon.js";

//the url of the currency franc outlined svg; resolved relative to this module
const URL_CURRENCYFRANCOUTLINED = new URL('../../assets/icons/currencyFrancOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency franc outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyFrancOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyFrancOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CURRENCYFRANCOUTLINED }, ...properties);
}

/**
 * Creates a currency franc outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyFrancOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyFrancOutlinedIcon(element, ...properties);
    return element;
}
