import { initIcon } from "./icon.js";

//the url of the six k plus svg; resolved relative to this module
const URL_SIXKPLUS = new URL('../../assets/icons/sixKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a six k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIXKPLUS }, ...properties);
}

/**
 * Creates a six k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initSixKPlusIcon(element, ...properties);
    return element;
}
