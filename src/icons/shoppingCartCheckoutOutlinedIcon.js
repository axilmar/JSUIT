import { initIcon } from "./icon.js";

//the url of the shopping cart checkout outlined svg; resolved relative to this module
const URL_SHOPPINGCARTCHECKOUTOUTLINED = new URL('../../assets/icons/shoppingCartCheckoutOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shopping cart checkout outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shoppingCartCheckoutOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShoppingCartCheckoutOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shoppingCartCheckoutOutlinedIcon', url: URL_SHOPPINGCARTCHECKOUTOUTLINED }, ...properties);
}

/**
 * Creates a shopping cart checkout outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shoppingCartCheckoutOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShoppingCartCheckoutOutlinedIcon(element, ...properties);
    return element;
}
