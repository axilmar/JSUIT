import { initIcon } from "./icon.js";

//the url of the price check svg; resolved relative to this module
const URL_PRICECHECK = new URL('../../assets/icons/priceCheck.svg', import.meta.url).href;

/**
 * Initializes an icon element as a price check icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/priceCheck.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPriceCheckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'priceCheckIcon', url: URL_PRICECHECK }, ...properties);
}

/**
 * Creates a price check icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const priceCheckIcon = (...properties) => {
    const element = document.createElement('div');
    initPriceCheckIcon(element, ...properties);
    return element;
}
