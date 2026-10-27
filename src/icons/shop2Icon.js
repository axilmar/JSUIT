import { initIcon } from "./icon.js";

//the url of the shop2 svg; resolved relative to this module
const URL_SHOP2 = new URL('../../assets/icons/shop2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shop2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shop2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShop2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shop2Icon', url: URL_SHOP2 }, ...properties);
}

/**
 * Creates a shop2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shop2Icon = (...properties) => {
    const element = document.createElement('div');
    initShop2Icon(element, ...properties);
    return element;
}
