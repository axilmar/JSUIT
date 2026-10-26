import { initIcon } from "./icon.js";

//the url of the no encryption gmailerrorred outlined svg; resolved relative to this module
const URL_NOENCRYPTIONGMAILERRORREDOUTLINED = new URL('../../assets/icons/noEncryptionGmailerrorredOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no encryption gmailerrorred outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noEncryptionGmailerrorredOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoEncryptionGmailerrorredOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOENCRYPTIONGMAILERRORREDOUTLINED }, ...properties);
}

/**
 * Creates a no encryption gmailerrorred outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noEncryptionGmailerrorredOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoEncryptionGmailerrorredOutlinedIcon(element, ...properties);
    return element;
}
