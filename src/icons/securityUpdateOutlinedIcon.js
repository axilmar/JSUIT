import { initIcon } from "./icon.js";

//the url of the security update outlined svg; resolved relative to this module
const URL_SECURITYUPDATEOUTLINED = new URL('../../assets/icons/securityUpdateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a security update outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/securityUpdateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSecurityUpdateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SECURITYUPDATEOUTLINED }, ...properties);
}

/**
 * Creates a security update outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const securityUpdateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSecurityUpdateOutlinedIcon(element, ...properties);
    return element;
}
