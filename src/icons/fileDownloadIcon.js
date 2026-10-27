import { initIcon } from "./icon.js";

//the url of the file download svg; resolved relative to this module
const URL_FILEDOWNLOAD = new URL('../../assets/icons/fileDownload.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file download icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileDownload.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileDownloadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fileDownloadIcon', url: URL_FILEDOWNLOAD }, ...properties);
}

/**
 * Creates a file download icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileDownloadIcon = (...properties) => {
    const element = document.createElement('div');
    initFileDownloadIcon(element, ...properties);
    return element;
}
