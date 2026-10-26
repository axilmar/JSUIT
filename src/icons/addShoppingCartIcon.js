import { initIcon } from "./icon.js";

//the url of the add shopping cart svg; resolved relative to this module
const URL_ADDSHOPPINGCART = new URL('../../assets/icons/addShoppingCart.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add shopping cart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addShoppingCart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddShoppingCartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDSHOPPINGCART }, ...properties);
}

/**
 * Creates an add shopping cart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addShoppingCartIcon = (...properties) => {
    const element = document.createElement('div');
    initAddShoppingCartIcon(element, ...properties);
    return element;
}
