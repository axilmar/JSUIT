import { initIcon } from "./icon.js";

//the url of the contacts outlined svg; resolved relative to this module
const URL_CONTACTSOUTLINED = new URL('../../assets/icons/contactsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contacts outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactsOutlinedIcon', url: URL_CONTACTSOUTLINED }, ...properties);
}

/**
 * Creates a contacts outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContactsOutlinedIcon(element, ...properties);
    return element;
}
