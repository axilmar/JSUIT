import { initIcon } from "./icon.js";

//the url of the looks6 svg; resolved relative to this module
const URL_LOOKS6 = new URL('../../assets/icons/looks6.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks6 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks6.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooks6Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'looks6Icon', url: URL_LOOKS6 }, ...properties);
}

/**
 * Creates a looks6 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looks6Icon = (...properties) => {
    const element = document.createElement('div');
    initLooks6Icon(element, ...properties);
    return element;
}
