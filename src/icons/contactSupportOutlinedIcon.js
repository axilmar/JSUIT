import { initIcon } from "./icon.js";

//the url of the contact support outlined svg; resolved relative to this module
const URL_CONTACTSUPPORTOUTLINED = new URL('../../assets/icons/contactSupportOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact support outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactSupportOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactSupportOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactSupportOutlinedIcon', url: URL_CONTACTSUPPORTOUTLINED }, ...properties);
}

/**
 * Creates a contact support outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactSupportOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContactSupportOutlinedIcon(element, ...properties);
    return element;
}
