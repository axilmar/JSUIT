import { initIcon } from "./icon.js";

//the url of the security update warning outlined svg; resolved relative to this module
const URL_SECURITYUPDATEWARNINGOUTLINED = new URL('../../assets/icons/securityUpdateWarningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a security update warning outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/securityUpdateWarningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSecurityUpdateWarningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SECURITYUPDATEWARNINGOUTLINED }, ...properties);
}

/**
 * Creates a security update warning outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const securityUpdateWarningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSecurityUpdateWarningOutlinedIcon(element, ...properties);
    return element;
}
