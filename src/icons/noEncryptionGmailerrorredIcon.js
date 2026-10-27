import { initIcon } from "./icon.js";

//the url of the no encryption gmailerrorred svg; resolved relative to this module
const URL_NOENCRYPTIONGMAILERRORRED = new URL('../../assets/icons/noEncryptionGmailerrorred.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no encryption gmailerrorred icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noEncryptionGmailerrorred.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoEncryptionGmailerrorredIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noEncryptionGmailerrorredIcon', url: URL_NOENCRYPTIONGMAILERRORRED }, ...properties);
}

/**
 * Creates a no encryption gmailerrorred icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noEncryptionGmailerrorredIcon = (...properties) => {
    const element = document.createElement('div');
    initNoEncryptionGmailerrorredIcon(element, ...properties);
    return element;
}
