import { initIcon } from "./icon.js";

//the url of the shopping cart outlined svg; resolved relative to this module
const URL_SHOPPINGCARTOUTLINED = new URL('../../assets/icons/shoppingCartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shopping cart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shoppingCartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShoppingCartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shoppingCartOutlinedIcon', url: URL_SHOPPINGCARTOUTLINED }, ...properties);
}

/**
 * Creates a shopping cart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shoppingCartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShoppingCartOutlinedIcon(element, ...properties);
    return element;
}
