import { initIcon } from "./icon.js";

//the url of the local bar svg; resolved relative to this module
const URL_LOCALBAR = new URL('../../assets/icons/localBar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localBar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalBarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALBAR }, ...properties);
}

/**
 * Creates a local bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localBarIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalBarIcon(element, ...properties);
    return element;
}
