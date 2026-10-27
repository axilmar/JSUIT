import { initIcon } from "./icon.js";

//the url of the shop2 outlined svg; resolved relative to this module
const URL_SHOP2OUTLINED = new URL('../../assets/icons/shop2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shop2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shop2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShop2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shop2OutlinedIcon', url: URL_SHOP2OUTLINED }, ...properties);
}

/**
 * Creates a shop2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shop2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShop2OutlinedIcon(element, ...properties);
    return element;
}
