import { initIcon } from "./icon.js";

//the url of the fiber pin svg; resolved relative to this module
const URL_FIBERPIN = new URL('../../assets/icons/fiberPin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber pin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberPin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberPinIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiberPinIcon', url: URL_FIBERPIN }, ...properties);
}

/**
 * Creates a fiber pin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberPinIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberPinIcon(element, ...properties);
    return element;
}
