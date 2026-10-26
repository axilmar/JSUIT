import { initIcon } from "./icon.js";

//the url of the discount svg; resolved relative to this module
const URL_DISCOUNT = new URL('../../assets/icons/discount.svg', import.meta.url).href;

/**
 * Initializes an icon element as a discount icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/discount.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiscountIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DISCOUNT }, ...properties);
}

/**
 * Creates a discount icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const discountIcon = (...properties) => {
    const element = document.createElement('div');
    initDiscountIcon(element, ...properties);
    return element;
}
