import { initIcon } from "./icon.js";

//the url of the propane svg; resolved relative to this module
const URL_PROPANE = new URL('../../assets/icons/propane.svg', import.meta.url).href;

/**
 * Initializes an icon element as a propane icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/propane.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPropaneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'propaneIcon', url: URL_PROPANE }, ...properties);
}

/**
 * Creates a propane icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const propaneIcon = (...properties) => {
    const element = document.createElement('div');
    initPropaneIcon(element, ...properties);
    return element;
}
