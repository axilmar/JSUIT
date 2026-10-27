import { initIcon } from "./icon.js";

//the url of the sell svg; resolved relative to this module
const URL_SELL = new URL('../../assets/icons/sell.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sell icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sell.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSellIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sellIcon', url: URL_SELL }, ...properties);
}

/**
 * Creates a sell icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sellIcon = (...properties) => {
    const element = document.createElement('div');
    initSellIcon(element, ...properties);
    return element;
}
