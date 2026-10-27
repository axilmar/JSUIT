import { initIcon } from "./icon.js";

//the url of the shop two outlined svg; resolved relative to this module
const URL_SHOPTWOOUTLINED = new URL('../../assets/icons/shopTwoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shop two outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shopTwoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShopTwoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shopTwoOutlinedIcon', url: URL_SHOPTWOOUTLINED }, ...properties);
}

/**
 * Creates a shop two outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shopTwoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShopTwoOutlinedIcon(element, ...properties);
    return element;
}
