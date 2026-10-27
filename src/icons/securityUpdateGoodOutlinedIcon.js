import { initIcon } from "./icon.js";

//the url of the security update good outlined svg; resolved relative to this module
const URL_SECURITYUPDATEGOODOUTLINED = new URL('../../assets/icons/securityUpdateGoodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a security update good outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/securityUpdateGoodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSecurityUpdateGoodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'securityUpdateGoodOutlinedIcon', url: URL_SECURITYUPDATEGOODOUTLINED }, ...properties);
}

/**
 * Creates a security update good outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const securityUpdateGoodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSecurityUpdateGoodOutlinedIcon(element, ...properties);
    return element;
}
