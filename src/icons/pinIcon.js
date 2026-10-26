import { initIcon } from "./icon.js";

//the url of the pin svg; resolved relative to this module
const URL_PIN = new URL('../../assets/icons/pin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPinIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PIN }, ...properties);
}

/**
 * Creates a pin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pinIcon = (...properties) => {
    const element = document.createElement('div');
    initPinIcon(element, ...properties);
    return element;
}
