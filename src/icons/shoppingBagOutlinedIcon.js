import { initIcon } from "./icon.js";

//the url of the shopping bag outlined svg; resolved relative to this module
const URL_SHOPPINGBAGOUTLINED = new URL('../../assets/icons/shoppingBagOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shopping bag outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shoppingBagOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShoppingBagOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHOPPINGBAGOUTLINED }, ...properties);
}

/**
 * Creates a shopping bag outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shoppingBagOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShoppingBagOutlinedIcon(element, ...properties);
    return element;
}
