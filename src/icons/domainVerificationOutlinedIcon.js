import { initIcon } from "./icon.js";

//the url of the domain verification outlined svg; resolved relative to this module
const URL_DOMAINVERIFICATIONOUTLINED = new URL('../../assets/icons/domainVerificationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a domain verification outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/domainVerificationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDomainVerificationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOMAINVERIFICATIONOUTLINED }, ...properties);
}

/**
 * Creates a domain verification outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const domainVerificationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDomainVerificationOutlinedIcon(element, ...properties);
    return element;
}
