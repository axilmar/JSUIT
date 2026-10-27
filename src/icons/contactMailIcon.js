import { initIcon } from "./icon.js";

//the url of the contact mail svg; resolved relative to this module
const URL_CONTACTMAIL = new URL('../../assets/icons/contactMail.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact mail icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactMail.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactMailIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactMailIcon', url: URL_CONTACTMAIL }, ...properties);
}

/**
 * Creates a contact mail icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactMailIcon = (...properties) => {
    const element = document.createElement('div');
    initContactMailIcon(element, ...properties);
    return element;
}
