import { initIcon } from "./icon.js";

//the url of the file upload outlined svg; resolved relative to this module
const URL_FILEUPLOADOUTLINED = new URL('../../assets/icons/fileUploadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file upload outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileUploadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileUploadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fileUploadOutlinedIcon', url: URL_FILEUPLOADOUTLINED }, ...properties);
}

/**
 * Creates a file upload outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileUploadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFileUploadOutlinedIcon(element, ...properties);
    return element;
}
