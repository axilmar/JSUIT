import { initIcon } from "./icon.js";

//the url of the severe cold svg; resolved relative to this module
const URL_SEVERECOLD = new URL('../../assets/icons/severeCold.svg', import.meta.url).href;

/**
 * Initializes an icon element as a severe cold icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/severeCold.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSevereColdIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'severeColdIcon', url: URL_SEVERECOLD }, ...properties);
}

/**
 * Creates a severe cold icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const severeColdIcon = (...properties) => {
    const element = document.createElement('div');
    initSevereColdIcon(element, ...properties);
    return element;
}
