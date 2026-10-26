import { initIcon } from "./icon.js";

//the url of the class svg; resolved relative to this module
const URL_CLASS = new URL('../../assets/icons/class.svg', import.meta.url).href;

/**
 * Initializes an icon element as a class icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/class.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClassIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLASS }, ...properties);
}

/**
 * Creates a class icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const classIcon = (...properties) => {
    const element = document.createElement('div');
    initClassIcon(element, ...properties);
    return element;
}
