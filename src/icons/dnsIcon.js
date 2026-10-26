import { initIcon } from "./icon.js";

//the url of the dns svg; resolved relative to this module
const URL_DNS = new URL('../../assets/icons/dns.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dns icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dns.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDnsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DNS }, ...properties);
}

/**
 * Creates a dns icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dnsIcon = (...properties) => {
    const element = document.createElement('div');
    initDnsIcon(element, ...properties);
    return element;
}
