import { initIcon } from "./icon.js";

//the url of the import contacts svg; resolved relative to this module
const URL_IMPORTCONTACTS = new URL('../../assets/icons/importContacts.svg', import.meta.url).href;

/**
 * Initializes an icon element as an import contacts icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/importContacts.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImportContactsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMPORTCONTACTS }, ...properties);
}

/**
 * Creates an import contacts icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const importContactsIcon = (...properties) => {
    const element = document.createElement('div');
    initImportContactsIcon(element, ...properties);
    return element;
}
