import { initIcon } from "./icon.js";

//the url of the contact mail outlined svg; resolved relative to this module
const URL_CONTACTMAILOUTLINED = new URL('../../assets/icons/contactMailOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact mail outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactMailOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactMailOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactMailOutlinedIcon', url: URL_CONTACTMAILOUTLINED }, ...properties);
}

/**
 * Creates a contact mail outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactMailOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContactMailOutlinedIcon(element, ...properties);
    return element;
}
