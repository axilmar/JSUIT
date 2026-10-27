import { initIcon } from "./icon.js";

//the url of the shopping basket outlined svg; resolved relative to this module
const URL_SHOPPINGBASKETOUTLINED = new URL('../../assets/icons/shoppingBasketOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shopping basket outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shoppingBasketOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShoppingBasketOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shoppingBasketOutlinedIcon', url: URL_SHOPPINGBASKETOUTLINED }, ...properties);
}

/**
 * Creates a shopping basket outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shoppingBasketOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShoppingBasketOutlinedIcon(element, ...properties);
    return element;
}
