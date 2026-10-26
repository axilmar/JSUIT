import { initIcon } from "./icon.js";

//the url of the two wheeler svg; resolved relative to this module
const URL_TWOWHEELER = new URL('../../assets/icons/twoWheeler.svg', import.meta.url).href;

/**
 * Initializes an icon element as a two wheeler icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twoWheeler.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwoWheelerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWOWHEELER }, ...properties);
}

/**
 * Creates a two wheeler icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twoWheelerIcon = (...properties) => {
    const element = document.createElement('div');
    initTwoWheelerIcon(element, ...properties);
    return element;
}
