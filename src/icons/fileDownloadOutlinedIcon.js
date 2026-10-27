import { initIcon } from "./icon.js";

//the url of the file download outlined svg; resolved relative to this module
const URL_FILEDOWNLOADOUTLINED = new URL('../../assets/icons/fileDownloadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file download outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileDownloadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileDownloadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fileDownloadOutlinedIcon', url: URL_FILEDOWNLOADOUTLINED }, ...properties);
}

/**
 * Creates a file download outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileDownloadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFileDownloadOutlinedIcon(element, ...properties);
    return element;
}
