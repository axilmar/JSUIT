import { initIcon } from "./icon.js";

//the url of the file download off svg; resolved relative to this module
const URL_FILEDOWNLOADOFF = new URL('../../assets/icons/fileDownloadOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file download off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileDownloadOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileDownloadOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILEDOWNLOADOFF }, ...properties);
}

/**
 * Creates a file download off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileDownloadOffIcon = (...properties) => {
    const element = document.createElement('div');
    initFileDownloadOffIcon(element, ...properties);
    return element;
}
