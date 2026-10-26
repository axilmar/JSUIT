import { initIcon } from "./icon.js";

//the url of the import contacts outlined svg; resolved relative to this module
const URL_IMPORTCONTACTSOUTLINED = new URL('../../assets/icons/importContactsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an import contacts outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/importContactsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImportContactsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMPORTCONTACTSOUTLINED }, ...properties);
}

/**
 * Creates an import contacts outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const importContactsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initImportContactsOutlinedIcon(element, ...properties);
    return element;
}
