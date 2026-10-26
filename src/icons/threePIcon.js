import { initIcon } from "./icon.js";

//the url of the three p svg; resolved relative to this module
const URL_THREEP = new URL('../../assets/icons/threeP.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three p icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeP.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreePIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREEP }, ...properties);
}

/**
 * Creates a three p icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threePIcon = (...properties) => {
    const element = document.createElement('div');
    initThreePIcon(element, ...properties);
    return element;
}
