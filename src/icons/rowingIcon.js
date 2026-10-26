import { initIcon } from "./icon.js";

//the url of the rowing svg; resolved relative to this module
const URL_ROWING = new URL('../../assets/icons/rowing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rowing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rowing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRowingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROWING }, ...properties);
}

/**
 * Creates a rowing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rowingIcon = (...properties) => {
    const element = document.createElement('div');
    initRowingIcon(element, ...properties);
    return element;
}
