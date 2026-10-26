import { initIcon } from "./icon.js";

//the url of the work svg; resolved relative to this module
const URL_WORK = new URL('../../assets/icons/work.svg', import.meta.url).href;

/**
 * Initializes an icon element as a work icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/work.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WORK }, ...properties);
}

/**
 * Creates a work icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkIcon(element, ...properties);
    return element;
}
