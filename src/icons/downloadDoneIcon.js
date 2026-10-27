import { initIcon } from "./icon.js";

//the url of the download done svg; resolved relative to this module
const URL_DOWNLOADDONE = new URL('../../assets/icons/downloadDone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a download done icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downloadDone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownloadDoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'downloadDoneIcon', url: URL_DOWNLOADDONE }, ...properties);
}

/**
 * Creates a download done icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downloadDoneIcon = (...properties) => {
    const element = document.createElement('div');
    initDownloadDoneIcon(element, ...properties);
    return element;
}
