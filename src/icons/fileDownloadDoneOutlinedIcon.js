import { initIcon } from "./icon.js";

//the url of the file download done outlined svg; resolved relative to this module
const URL_FILEDOWNLOADDONEOUTLINED = new URL('../../assets/icons/fileDownloadDoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file download done outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileDownloadDoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileDownloadDoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILEDOWNLOADDONEOUTLINED }, ...properties);
}

/**
 * Creates a file download done outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileDownloadDoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFileDownloadDoneOutlinedIcon(element, ...properties);
    return element;
}
