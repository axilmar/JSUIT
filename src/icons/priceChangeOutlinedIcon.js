import { initIcon } from "./icon.js";

//the url of the price change outlined svg; resolved relative to this module
const URL_PRICECHANGEOUTLINED = new URL('../../assets/icons/priceChangeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a price change outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/priceChangeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPriceChangeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PRICECHANGEOUTLINED }, ...properties);
}

/**
 * Creates a price change outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const priceChangeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPriceChangeOutlinedIcon(element, ...properties);
    return element;
}
