import { initIcon } from "./icon.js";

//the url of the security svg; resolved relative to this module
const URL_SECURITY = new URL('../../assets/icons/security.svg', import.meta.url).href;

/**
 * Initializes an icon element as a security icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/security.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSecurityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'securityIcon', url: URL_SECURITY }, ...properties);
}

/**
 * Creates a security icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const securityIcon = (...properties) => {
    const element = document.createElement('div');
    initSecurityIcon(element, ...properties);
    return element;
}
