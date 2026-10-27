import { initIcon } from "./icon.js";

//the url of the shopping cart svg; resolved relative to this module
const URL_SHOPPINGCART = new URL('../../assets/icons/shoppingCart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shopping cart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shoppingCart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShoppingCartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shoppingCartIcon', url: URL_SHOPPINGCART }, ...properties);
}

/**
 * Creates a shopping cart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shoppingCartIcon = (...properties) => {
    const element = document.createElement('div');
    initShoppingCartIcon(element, ...properties);
    return element;
}
