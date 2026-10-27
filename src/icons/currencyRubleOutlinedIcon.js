import { initIcon } from "./icon.js";

//the url of the currency ruble outlined svg; resolved relative to this module
const URL_CURRENCYRUBLEOUTLINED = new URL('../../assets/icons/currencyRubleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a currency ruble outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/currencyRubleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCurrencyRubleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'currencyRubleOutlinedIcon', url: URL_CURRENCYRUBLEOUTLINED }, ...properties);
}

/**
 * Creates a currency ruble outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const currencyRubleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCurrencyRubleOutlinedIcon(element, ...properties);
    return element;
}
