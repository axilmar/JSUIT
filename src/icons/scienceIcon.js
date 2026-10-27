import { initIcon } from "./icon.js";

//the url of the science svg; resolved relative to this module
const URL_SCIENCE = new URL('../../assets/icons/science.svg', import.meta.url).href;

/**
 * Initializes an icon element as a science icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/science.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScienceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'scienceIcon', url: URL_SCIENCE }, ...properties);
}

/**
 * Creates a science icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scienceIcon = (...properties) => {
    const element = document.createElement('div');
    initScienceIcon(element, ...properties);
    return element;
}
