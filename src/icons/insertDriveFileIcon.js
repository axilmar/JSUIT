import { initIcon } from "./icon.js";

//the url of the insert drive file svg; resolved relative to this module
const URL_INSERTDRIVEFILE = new URL('../../assets/icons/insertDriveFile.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert drive file icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertDriveFile.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertDriveFileIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSERTDRIVEFILE }, ...properties);
}

/**
 * Creates an insert drive file icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertDriveFileIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertDriveFileIcon(element, ...properties);
    return element;
}
