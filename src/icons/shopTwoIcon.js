import { initIcon } from "./icon.js";

//the url of the shop two svg; resolved relative to this module
const URL_SHOPTWO = new URL('../../assets/icons/shopTwo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shop two icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shopTwo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShopTwoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHOPTWO }, ...properties);
}

/**
 * Creates a shop two icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shopTwoIcon = (...properties) => {
    const element = document.createElement('div');
    initShopTwoIcon(element, ...properties);
    return element;
}
