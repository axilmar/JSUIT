import { initIcon } from "./icon.js";

//the url of the contact page svg; resolved relative to this module
const URL_CONTACTPAGE = new URL('../../assets/icons/contactPage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact page icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactPage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactPageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactPageIcon', url: URL_CONTACTPAGE }, ...properties);
}

/**
 * Creates a contact page icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactPageIcon = (...properties) => {
    const element = document.createElement('div');
    initContactPageIcon(element, ...properties);
    return element;
}
