import { initIcon } from "./icon.js";

//the url of the contact phone svg; resolved relative to this module
const URL_CONTACTPHONE = new URL('../../assets/icons/contactPhone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact phone icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactPhone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactPhoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTACTPHONE }, ...properties);
}

/**
 * Creates a contact phone icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactPhoneIcon = (...properties) => {
    const element = document.createElement('div');
    initContactPhoneIcon(element, ...properties);
    return element;
}
