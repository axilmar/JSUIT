import { initIcon } from "./icon.js";

//the url of the numbers svg; resolved relative to this module
const URL_NUMBERS = new URL('../../assets/icons/numbers.svg', import.meta.url).href;

/**
 * Initializes an icon element as a numbers icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/numbers.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNumbersIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NUMBERS }, ...properties);
}

/**
 * Creates a numbers icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const numbersIcon = (...properties) => {
    const element = document.createElement('div');
    initNumbersIcon(element, ...properties);
    return element;
}
