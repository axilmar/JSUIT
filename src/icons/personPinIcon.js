import { initIcon } from "./icon.js";

//the url of the person pin svg; resolved relative to this module
const URL_PERSONPIN = new URL('../../assets/icons/personPin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person pin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personPin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonPinIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personPinIcon', url: URL_PERSONPIN }, ...properties);
}

/**
 * Creates a person pin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personPinIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonPinIcon(element, ...properties);
    return element;
}
