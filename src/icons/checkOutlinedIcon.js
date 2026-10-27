import { initIcon } from "./icon.js";

//the url of the check outlined svg; resolved relative to this module
const URL_CHECKOUTLINED = new URL('../../assets/icons/checkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checkOutlinedIcon', url: URL_CHECKOUTLINED }, ...properties);
}

/**
 * Creates a check outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckOutlinedIcon(element, ...properties);
    return element;
}
