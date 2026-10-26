import { initIcon } from "./icon.js";

//the url of the import export outlined svg; resolved relative to this module
const URL_IMPORTEXPORTOUTLINED = new URL('../../assets/icons/importExportOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an import export outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/importExportOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImportExportOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMPORTEXPORTOUTLINED }, ...properties);
}

/**
 * Creates an import export outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const importExportOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initImportExportOutlinedIcon(element, ...properties);
    return element;
}
