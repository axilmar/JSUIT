import { initIcon } from "./icon.js";

//the url of the expand less svg; resolved relative to this module
const URL_EXPANDLESS = new URL('../../assets/icons/expandLess.svg', import.meta.url).href;

/**
 * Initializes an icon element as an expand less icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/expandLess.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandLessIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPANDLESS }, ...properties);
}

/**
 * Creates an expand less icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandLessIcon = (...properties) => {
    const element = document.createElement('div');
    initExpandLessIcon(element, ...properties);
    return element;
}
