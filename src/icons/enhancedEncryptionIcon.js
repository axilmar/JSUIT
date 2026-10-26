import { initIcon } from "./icon.js";

//the url of the enhanced encryption svg; resolved relative to this module
const URL_ENHANCEDENCRYPTION = new URL('../../assets/icons/enhancedEncryption.svg', import.meta.url).href;

/**
 * Initializes an icon element as an enhanced encryption icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/enhancedEncryption.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEnhancedEncryptionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ENHANCEDENCRYPTION }, ...properties);
}

/**
 * Creates an enhanced encryption icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const enhancedEncryptionIcon = (...properties) => {
    const element = document.createElement('div');
    initEnhancedEncryptionIcon(element, ...properties);
    return element;
}
