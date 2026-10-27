import { initIcon } from "./icon.js";

//the url of the e mobiledata svg; resolved relative to this module
const URL_EMOBILEDATA = new URL('../../assets/icons/eMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as an e mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eMobiledataIcon', url: URL_EMOBILEDATA }, ...properties);
}

/**
 * Creates an e mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initEMobiledataIcon(element, ...properties);
    return element;
}
