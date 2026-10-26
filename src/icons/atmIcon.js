import { initIcon } from "./icon.js";

//the url of the atm svg; resolved relative to this module
const URL_ATM = new URL('../../assets/icons/atm.svg', import.meta.url).href;

/**
 * Initializes an icon element as an atm icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/atm.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAtmIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ATM }, ...properties);
}

/**
 * Creates an atm icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const atmIcon = (...properties) => {
    const element = document.createElement('div');
    initAtmIcon(element, ...properties);
    return element;
}
