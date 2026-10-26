import { initIcon } from "./icon.js";

//the url of the shield moon svg; resolved relative to this module
const URL_SHIELDMOON = new URL('../../assets/icons/shieldMoon.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shield moon icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shieldMoon.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShieldMoonIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHIELDMOON }, ...properties);
}

/**
 * Creates a shield moon icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shieldMoonIcon = (...properties) => {
    const element = document.createElement('div');
    initShieldMoonIcon(element, ...properties);
    return element;
}
