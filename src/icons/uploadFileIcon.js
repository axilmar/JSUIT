import { initIcon } from "./icon.js";

//the url of the upload file svg; resolved relative to this module
const URL_UPLOADFILE = new URL('../../assets/icons/uploadFile.svg', import.meta.url).href;

/**
 * Initializes an icon element as an upload file icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/uploadFile.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUploadFileIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'uploadFileIcon', url: URL_UPLOADFILE }, ...properties);
}

/**
 * Creates an upload file icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const uploadFileIcon = (...properties) => {
    const element = document.createElement('div');
    initUploadFileIcon(element, ...properties);
    return element;
}
