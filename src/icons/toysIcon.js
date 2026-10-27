import { initIcon } from "./icon.js";

//the url of the toys svg; resolved relative to this module
const URL_TOYS = new URL('../../assets/icons/toys.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toys icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/toys.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initToysIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'toysIcon', url: URL_TOYS }, ...properties);
}

/**
 * Creates a toys icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const toysIcon = (...properties) => {
    const element = document.createElement('div');
    initToysIcon(element, ...properties);
    return element;
}
