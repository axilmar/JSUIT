import { initIcon } from "./icon.js";

//the url of the start svg; resolved relative to this module
const URL_START = new URL('../../assets/icons/start.svg', import.meta.url).href;

/**
 * Initializes an icon element as a start icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/start.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_START }, ...properties);
}

/**
 * Creates a start icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const startIcon = (...properties) => {
    const element = document.createElement('div');
    initStartIcon(element, ...properties);
    return element;
}
