import { initIcon } from "./icon.js";

//the url of the looks3 svg; resolved relative to this module
const URL_LOOKS3 = new URL('../../assets/icons/looks3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooks3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOOKS3 }, ...properties);
}

/**
 * Creates a looks3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looks3Icon = (...properties) => {
    const element = document.createElement('div');
    initLooks3Icon(element, ...properties);
    return element;
}
