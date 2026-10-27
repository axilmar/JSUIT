import { initIcon } from "./icon.js";

//the url of the shop outlined svg; resolved relative to this module
const URL_SHOPOUTLINED = new URL('../../assets/icons/shopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shopOutlinedIcon', url: URL_SHOPOUTLINED }, ...properties);
}

/**
 * Creates a shop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShopOutlinedIcon(element, ...properties);
    return element;
}
