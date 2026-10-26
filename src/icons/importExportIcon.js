import { initIcon } from "./icon.js";

//the url of the import export svg; resolved relative to this module
const URL_IMPORTEXPORT = new URL('../../assets/icons/importExport.svg', import.meta.url).href;

/**
 * Initializes an icon element as an import export icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/importExport.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImportExportIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMPORTEXPORT }, ...properties);
}

/**
 * Creates an import export icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const importExportIcon = (...properties) => {
    const element = document.createElement('div');
    initImportExportIcon(element, ...properties);
    return element;
}
