import { initIcon } from "./icon.js";

//the url of the markunread svg; resolved relative to this module
const URL_MARKUNREAD = new URL('../../assets/icons/markunread.svg', import.meta.url).href;

/**
 * Initializes an icon element as a markunread icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markunread.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkunreadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKUNREAD }, ...properties);
}

/**
 * Creates a markunread icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markunreadIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkunreadIcon(element, ...properties);
    return element;
}
