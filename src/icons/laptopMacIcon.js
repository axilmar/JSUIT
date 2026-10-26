import { initIcon } from "./icon.js";

//the url of the laptop mac svg; resolved relative to this module
const URL_LAPTOPMAC = new URL('../../assets/icons/laptopMac.svg', import.meta.url).href;

/**
 * Initializes an icon element as a laptop mac icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/laptopMac.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaptopMacIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LAPTOPMAC }, ...properties);
}

/**
 * Creates a laptop mac icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const laptopMacIcon = (...properties) => {
    const element = document.createElement('div');
    initLaptopMacIcon(element, ...properties);
    return element;
}
