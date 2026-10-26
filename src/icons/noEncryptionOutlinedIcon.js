import { initIcon } from "./icon.js";

//the url of the no encryption outlined svg; resolved relative to this module
const URL_NOENCRYPTIONOUTLINED = new URL('../../assets/icons/noEncryptionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no encryption outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noEncryptionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoEncryptionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOENCRYPTIONOUTLINED }, ...properties);
}

/**
 * Creates a no encryption outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noEncryptionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoEncryptionOutlinedIcon(element, ...properties);
    return element;
}
