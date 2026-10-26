import { initIcon } from "./icon.js";

//the url of the file download done svg; resolved relative to this module
const URL_FILEDOWNLOADDONE = new URL('../../assets/icons/fileDownloadDone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file download done icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileDownloadDone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileDownloadDoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILEDOWNLOADDONE }, ...properties);
}

/**
 * Creates a file download done icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileDownloadDoneIcon = (...properties) => {
    const element = document.createElement('div');
    initFileDownloadDoneIcon(element, ...properties);
    return element;
}
