import { initIcon } from "./icon.js";

//the url of the perm phone msg svg; resolved relative to this module
const URL_PERMPHONEMSG = new URL('../../assets/icons/permPhoneMsg.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm phone msg icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permPhoneMsg.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermPhoneMsgIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERMPHONEMSG }, ...properties);
}

/**
 * Creates a perm phone msg icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permPhoneMsgIcon = (...properties) => {
    const element = document.createElement('div');
    initPermPhoneMsgIcon(element, ...properties);
    return element;
}
