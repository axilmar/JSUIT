import { initIcon } from "./icon.js";

//the url of the remove shopping cart svg; resolved relative to this module
const URL_REMOVESHOPPINGCART = new URL('../../assets/icons/removeShoppingCart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove shopping cart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeShoppingCart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveShoppingCartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REMOVESHOPPINGCART }, ...properties);
}

/**
 * Creates a remove shopping cart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeShoppingCartIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveShoppingCartIcon(element, ...properties);
    return element;
}
