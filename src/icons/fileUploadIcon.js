import { initIcon } from "./icon.js";

//the url of the file upload svg; resolved relative to this module
const URL_FILEUPLOAD = new URL('../../assets/icons/fileUpload.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file upload icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileUpload.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileUploadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILEUPLOAD }, ...properties);
}

/**
 * Creates a file upload icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileUploadIcon = (...properties) => {
    const element = document.createElement('div');
    initFileUploadIcon(element, ...properties);
    return element;
}
