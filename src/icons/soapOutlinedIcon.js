import { initIcon } from "./icon.js";

//the url of the soap outlined svg; resolved relative to this module
const URL_SOAPOUTLINED = new URL('../../assets/icons/soapOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a soap outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/soapOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSoapOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'soapOutlinedIcon', url: URL_SOAPOUTLINED }, ...properties);
}

/**
 * Creates a soap outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const soapOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSoapOutlinedIcon(element, ...properties);
    return element;
}
