import { initIcon } from "./icon.js";

//the url of the security outlined svg; resolved relative to this module
const URL_SECURITYOUTLINED = new URL('../../assets/icons/securityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a security outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/securityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSecurityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'securityOutlinedIcon', url: URL_SECURITYOUTLINED }, ...properties);
}

/**
 * Creates a security outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const securityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSecurityOutlinedIcon(element, ...properties);
    return element;
}
