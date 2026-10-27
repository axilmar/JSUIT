import { initIcon } from "./icon.js";

//the url of the add business svg; resolved relative to this module
const URL_ADDBUSINESS = new URL('../../assets/icons/addBusiness.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add business icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addBusiness.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddBusinessIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addBusinessIcon', url: URL_ADDBUSINESS }, ...properties);
}

/**
 * Creates an add business icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addBusinessIcon = (...properties) => {
    const element = document.createElement('div');
    initAddBusinessIcon(element, ...properties);
    return element;
}
