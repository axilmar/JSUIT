import { initIcon } from "./icon.js";

//the url of the looks4 svg; resolved relative to this module
const URL_LOOKS4 = new URL('../../assets/icons/looks4.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks4 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks4.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooks4Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOOKS4 }, ...properties);
}

/**
 * Creates a looks4 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looks4Icon = (...properties) => {
    const element = document.createElement('div');
    initLooks4Icon(element, ...properties);
    return element;
}
