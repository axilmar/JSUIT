import { initIcon } from "./icon.js";

//the url of the copyright svg; resolved relative to this module
const URL_COPYRIGHT = new URL('../../assets/icons/copyright.svg', import.meta.url).href;

/**
 * Initializes an icon element as a copyright icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/copyright.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCopyrightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'copyrightIcon', url: URL_COPYRIGHT }, ...properties);
}

/**
 * Creates a copyright icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const copyrightIcon = (...properties) => {
    const element = document.createElement('div');
    initCopyrightIcon(element, ...properties);
    return element;
}
