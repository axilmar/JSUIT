import { initIcon } from "./icon.js";

//the url of the six k svg; resolved relative to this module
const URL_SIXK = new URL('../../assets/icons/sixK.svg', import.meta.url).href;

/**
 * Initializes an icon element as a six k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIXK }, ...properties);
}

/**
 * Creates a six k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixKIcon = (...properties) => {
    const element = document.createElement('div');
    initSixKIcon(element, ...properties);
    return element;
}
