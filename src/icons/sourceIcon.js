import { initIcon } from "./icon.js";

//the url of the source svg; resolved relative to this module
const URL_SOURCE = new URL('../../assets/icons/source.svg', import.meta.url).href;

/**
 * Initializes an icon element as a source icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/source.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSourceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOURCE }, ...properties);
}

/**
 * Creates a source icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sourceIcon = (...properties) => {
    const element = document.createElement('div');
    initSourceIcon(element, ...properties);
    return element;
}
