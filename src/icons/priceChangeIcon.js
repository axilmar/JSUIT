import { initIcon } from "./icon.js";

//the url of the price change svg; resolved relative to this module
const URL_PRICECHANGE = new URL('../../assets/icons/priceChange.svg', import.meta.url).href;

/**
 * Initializes an icon element as a price change icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/priceChange.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPriceChangeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'priceChangeIcon', url: URL_PRICECHANGE }, ...properties);
}

/**
 * Creates a price change icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const priceChangeIcon = (...properties) => {
    const element = document.createElement('div');
    initPriceChangeIcon(element, ...properties);
    return element;
}
