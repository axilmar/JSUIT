import { initIcon } from "./icon.js";

//the url of the hide source svg; resolved relative to this module
const URL_HIDESOURCE = new URL('../../assets/icons/hideSource.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hide source icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hideSource.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHideSourceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hideSourceIcon', url: URL_HIDESOURCE }, ...properties);
}

/**
 * Creates a hide source icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hideSourceIcon = (...properties) => {
    const element = document.createElement('div');
    initHideSourceIcon(element, ...properties);
    return element;
}
