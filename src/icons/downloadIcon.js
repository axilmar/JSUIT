import { initIcon } from "./icon.js";

//the url of the download svg; resolved relative to this module
const URL_DOWNLOAD = new URL('../../assets/icons/download.svg', import.meta.url).href;

/**
 * Initializes an icon element as a download icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/download.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownloadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOWNLOAD }, ...properties);
}

/**
 * Creates a download icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downloadIcon = (...properties) => {
    const element = document.createElement('div');
    initDownloadIcon(element, ...properties);
    return element;
}
