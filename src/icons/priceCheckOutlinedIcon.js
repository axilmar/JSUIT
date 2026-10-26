import { initIcon } from "./icon.js";

//the url of the price check outlined svg; resolved relative to this module
const URL_PRICECHECKOUTLINED = new URL('../../assets/icons/priceCheckOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a price check outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/priceCheckOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPriceCheckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PRICECHECKOUTLINED }, ...properties);
}

/**
 * Creates a price check outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const priceCheckOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPriceCheckOutlinedIcon(element, ...properties);
    return element;
}
