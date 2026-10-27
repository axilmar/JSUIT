import { initIcon } from "./icon.js";

//the url of the leak remove svg; resolved relative to this module
const URL_LEAKREMOVE = new URL('../../assets/icons/leakRemove.svg', import.meta.url).href;

/**
 * Initializes an icon element as a leak remove icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/leakRemove.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLeakRemoveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'leakRemoveIcon', url: URL_LEAKREMOVE }, ...properties);
}

/**
 * Creates a leak remove icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const leakRemoveIcon = (...properties) => {
    const element = document.createElement('div');
    initLeakRemoveIcon(element, ...properties);
    return element;
}
