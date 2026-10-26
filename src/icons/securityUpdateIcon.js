import { initIcon } from "./icon.js";

//the url of the security update svg; resolved relative to this module
const URL_SECURITYUPDATE = new URL('../../assets/icons/securityUpdate.svg', import.meta.url).href;

/**
 * Initializes an icon element as a security update icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/securityUpdate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSecurityUpdateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SECURITYUPDATE }, ...properties);
}

/**
 * Creates a security update icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const securityUpdateIcon = (...properties) => {
    const element = document.createElement('div');
    initSecurityUpdateIcon(element, ...properties);
    return element;
}
