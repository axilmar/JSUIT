import { initIcon } from "./icon.js";

//the url of the security update good svg; resolved relative to this module
const URL_SECURITYUPDATEGOOD = new URL('../../assets/icons/securityUpdateGood.svg', import.meta.url).href;

/**
 * Initializes an icon element as a security update good icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/securityUpdateGood.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSecurityUpdateGoodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SECURITYUPDATEGOOD }, ...properties);
}

/**
 * Creates a security update good icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const securityUpdateGoodIcon = (...properties) => {
    const element = document.createElement('div');
    initSecurityUpdateGoodIcon(element, ...properties);
    return element;
}
