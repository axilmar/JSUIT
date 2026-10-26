import { initIcon } from "./icon.js";

//the url of the savings svg; resolved relative to this module
const URL_SAVINGS = new URL('../../assets/icons/savings.svg', import.meta.url).href;

/**
 * Initializes an icon element as a savings icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/savings.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSavingsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAVINGS }, ...properties);
}

/**
 * Creates a savings icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const savingsIcon = (...properties) => {
    const element = document.createElement('div');
    initSavingsIcon(element, ...properties);
    return element;
}
