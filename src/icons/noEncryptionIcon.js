import { initIcon } from "./icon.js";

//the url of the no encryption svg; resolved relative to this module
const URL_NOENCRYPTION = new URL('../../assets/icons/noEncryption.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no encryption icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noEncryption.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoEncryptionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOENCRYPTION }, ...properties);
}

/**
 * Creates a no encryption icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noEncryptionIcon = (...properties) => {
    const element = document.createElement('div');
    initNoEncryptionIcon(element, ...properties);
    return element;
}
