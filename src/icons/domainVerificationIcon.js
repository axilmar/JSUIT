import { initIcon } from "./icon.js";

//the url of the domain verification svg; resolved relative to this module
const URL_DOMAINVERIFICATION = new URL('../../assets/icons/domainVerification.svg', import.meta.url).href;

/**
 * Initializes an icon element as a domain verification icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/domainVerification.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDomainVerificationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'domainVerificationIcon', url: URL_DOMAINVERIFICATION }, ...properties);
}

/**
 * Creates a domain verification icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const domainVerificationIcon = (...properties) => {
    const element = document.createElement('div');
    initDomainVerificationIcon(element, ...properties);
    return element;
}
