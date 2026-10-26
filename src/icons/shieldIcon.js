import { initIcon } from "./icon.js";

//the url of the shield svg; resolved relative to this module
const URL_SHIELD = new URL('../../assets/icons/shield.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shield icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shield.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShieldIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHIELD }, ...properties);
}

/**
 * Creates a shield icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shieldIcon = (...properties) => {
    const element = document.createElement('div');
    initShieldIcon(element, ...properties);
    return element;
}
