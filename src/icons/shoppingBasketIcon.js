import { initIcon } from "./icon.js";

//the url of the shopping basket svg; resolved relative to this module
const URL_SHOPPINGBASKET = new URL('../../assets/icons/shoppingBasket.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shopping basket icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shoppingBasket.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShoppingBasketIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHOPPINGBASKET }, ...properties);
}

/**
 * Creates a shopping basket icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shoppingBasketIcon = (...properties) => {
    const element = document.createElement('div');
    initShoppingBasketIcon(element, ...properties);
    return element;
}
