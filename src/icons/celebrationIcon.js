import { initIcon } from "./icon.js";

//the url of the celebration svg; resolved relative to this module
const URL_CELEBRATION = new URL('../../assets/icons/celebration.svg', import.meta.url).href;

/**
 * Initializes an icon element as a celebration icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/celebration.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCelebrationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CELEBRATION }, ...properties);
}

/**
 * Creates a celebration icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const celebrationIcon = (...properties) => {
    const element = document.createElement('div');
    initCelebrationIcon(element, ...properties);
    return element;
}
