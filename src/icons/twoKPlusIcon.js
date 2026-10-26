import { initIcon } from "./icon.js";

//the url of the two k plus svg; resolved relative to this module
const URL_TWOKPLUS = new URL('../../assets/icons/twoKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a two k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twoKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwoKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWOKPLUS }, ...properties);
}

/**
 * Creates a two k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twoKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initTwoKPlusIcon(element, ...properties);
    return element;
}
