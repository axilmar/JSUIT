import { initIcon } from "./icon.js";

//the url of the contacts svg; resolved relative to this module
const URL_CONTACTS = new URL('../../assets/icons/contacts.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contacts icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contacts.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTACTS }, ...properties);
}

/**
 * Creates a contacts icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactsIcon = (...properties) => {
    const element = document.createElement('div');
    initContactsIcon(element, ...properties);
    return element;
}
