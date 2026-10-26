import { initIcon } from "./icon.js";

//the url of the dns outlined svg; resolved relative to this module
const URL_DNSOUTLINED = new URL('../../assets/icons/dnsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dns outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dnsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDnsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DNSOUTLINED }, ...properties);
}

/**
 * Creates a dns outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dnsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDnsOutlinedIcon(element, ...properties);
    return element;
}
