import { initIcon } from "./icon.js";

//the url of the contact support svg; resolved relative to this module
const URL_CONTACTSUPPORT = new URL('../../assets/icons/contactSupport.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact support icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactSupport.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactSupportIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactSupportIcon', url: URL_CONTACTSUPPORT }, ...properties);
}

/**
 * Creates a contact support icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactSupportIcon = (...properties) => {
    const element = document.createElement('div');
    initContactSupportIcon(element, ...properties);
    return element;
}
