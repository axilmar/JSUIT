import { initIcon } from "./icon.js";

//the url of the shopping cart checkout svg; resolved relative to this module
const URL_SHOPPINGCARTCHECKOUT = new URL('../../assets/icons/shoppingCartCheckout.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shopping cart checkout icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shoppingCartCheckout.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShoppingCartCheckoutIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shoppingCartCheckoutIcon', url: URL_SHOPPINGCARTCHECKOUT }, ...properties);
}

/**
 * Creates a shopping cart checkout icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shoppingCartCheckoutIcon = (...properties) => {
    const element = document.createElement('div');
    initShoppingCartCheckoutIcon(element, ...properties);
    return element;
}
