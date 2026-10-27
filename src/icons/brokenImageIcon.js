import { initIcon } from "./icon.js";

//the url of the broken image svg; resolved relative to this module
const URL_BROKENIMAGE = new URL('../../assets/icons/brokenImage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a broken image icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brokenImage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrokenImageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brokenImageIcon', url: URL_BROKENIMAGE }, ...properties);
}

/**
 * Creates a broken image icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brokenImageIcon = (...properties) => {
    const element = document.createElement('div');
    initBrokenImageIcon(element, ...properties);
    return element;
}
