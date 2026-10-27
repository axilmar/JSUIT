import { initIcon } from "./icon.js";

//the url of the file download off outlined svg; resolved relative to this module
const URL_FILEDOWNLOADOFFOUTLINED = new URL('../../assets/icons/fileDownloadOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file download off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileDownloadOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileDownloadOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fileDownloadOffOutlinedIcon', url: URL_FILEDOWNLOADOFFOUTLINED }, ...properties);
}

/**
 * Creates a file download off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileDownloadOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFileDownloadOffOutlinedIcon(element, ...properties);
    return element;
}
