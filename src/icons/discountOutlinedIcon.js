import { initIcon } from "./icon.js";

//the url of the discount outlined svg; resolved relative to this module
const URL_DISCOUNTOUTLINED = new URL('../../assets/icons/discountOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a discount outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/discountOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiscountOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DISCOUNTOUTLINED }, ...properties);
}

/**
 * Creates a discount outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const discountOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDiscountOutlinedIcon(element, ...properties);
    return element;
}
