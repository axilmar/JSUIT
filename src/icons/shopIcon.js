import { initIcon } from "./icon.js";

//the url of the shop svg; resolved relative to this module
const URL_SHOP = new URL('../../assets/icons/shop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHOP }, ...properties);
}

/**
 * Creates a shop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shopIcon = (...properties) => {
    const element = document.createElement('div');
    initShopIcon(element, ...properties);
    return element;
}
