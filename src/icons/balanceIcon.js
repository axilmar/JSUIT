import { initIcon } from "./icon.js";

//the url of the balance svg; resolved relative to this module
const URL_BALANCE = new URL('../../assets/icons/balance.svg', import.meta.url).href;

/**
 * Initializes an icon element as a balance icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/balance.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBalanceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'balanceIcon', url: URL_BALANCE }, ...properties);
}

/**
 * Creates a balance icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const balanceIcon = (...properties) => {
    const element = document.createElement('div');
    initBalanceIcon(element, ...properties);
    return element;
}
