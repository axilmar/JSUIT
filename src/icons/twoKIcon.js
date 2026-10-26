import { initIcon } from "./icon.js";

//the url of the two k svg; resolved relative to this module
const URL_TWOK = new URL('../../assets/icons/twoK.svg', import.meta.url).href;

/**
 * Initializes an icon element as a two k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twoK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwoKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWOK }, ...properties);
}

/**
 * Creates a two k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twoKIcon = (...properties) => {
    const element = document.createElement('div');
    initTwoKIcon(element, ...properties);
    return element;
}
