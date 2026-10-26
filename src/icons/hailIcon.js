import { initIcon } from "./icon.js";

//the url of the hail svg; resolved relative to this module
const URL_HAIL = new URL('../../assets/icons/hail.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hail icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hail.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHailIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HAIL }, ...properties);
}

/**
 * Creates a hail icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hailIcon = (...properties) => {
    const element = document.createElement('div');
    initHailIcon(element, ...properties);
    return element;
}
