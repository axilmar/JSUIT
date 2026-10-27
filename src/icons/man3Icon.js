import { initIcon } from "./icon.js";

//the url of the man3 svg; resolved relative to this module
const URL_MAN3 = new URL('../../assets/icons/man3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a man3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/man3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMan3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'man3Icon', url: URL_MAN3 }, ...properties);
}

/**
 * Creates a man3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const man3Icon = (...properties) => {
    const element = document.createElement('div');
    initMan3Icon(element, ...properties);
    return element;
}
