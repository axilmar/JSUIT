import { initIcon } from "./icon.js";

//the url of the payments outlined svg; resolved relative to this module
const URL_PAYMENTSOUTLINED = new URL('../../assets/icons/paymentsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a payments outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/paymentsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPaymentsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAYMENTSOUTLINED }, ...properties);
}

/**
 * Creates a payments outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paymentsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPaymentsOutlinedIcon(element, ...properties);
    return element;
}
