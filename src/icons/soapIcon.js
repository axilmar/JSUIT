import { initIcon } from "./icon.js";

//the url of the soap svg; resolved relative to this module
const URL_SOAP = new URL('../../assets/icons/soap.svg', import.meta.url).href;

/**
 * Initializes an icon element as a soap icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/soap.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSoapIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOAP }, ...properties);
}

/**
 * Creates a soap icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const soapIcon = (...properties) => {
    const element = document.createElement('div');
    initSoapIcon(element, ...properties);
    return element;
}
