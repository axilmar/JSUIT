import { initIcon } from "./icon.js";

//the url of the shopping bag svg; resolved relative to this module
const URL_SHOPPINGBAG = new URL('../../assets/icons/shoppingBag.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shopping bag icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shoppingBag.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShoppingBagIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHOPPINGBAG }, ...properties);
}

/**
 * Creates a shopping bag icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shoppingBagIcon = (...properties) => {
    const element = document.createElement('div');
    initShoppingBagIcon(element, ...properties);
    return element;
}
