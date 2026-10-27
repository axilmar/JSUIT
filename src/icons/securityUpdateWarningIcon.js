import { initIcon } from "./icon.js";

//the url of the security update warning svg; resolved relative to this module
const URL_SECURITYUPDATEWARNING = new URL('../../assets/icons/securityUpdateWarning.svg', import.meta.url).href;

/**
 * Initializes an icon element as a security update warning icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/securityUpdateWarning.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSecurityUpdateWarningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'securityUpdateWarningIcon', url: URL_SECURITYUPDATEWARNING }, ...properties);
}

/**
 * Creates a security update warning icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const securityUpdateWarningIcon = (...properties) => {
    const element = document.createElement('div');
    initSecurityUpdateWarningIcon(element, ...properties);
    return element;
}
