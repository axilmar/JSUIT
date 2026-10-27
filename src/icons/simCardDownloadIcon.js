import { initIcon } from "./icon.js";

//the url of the sim card download svg; resolved relative to this module
const URL_SIMCARDDOWNLOAD = new URL('../../assets/icons/simCardDownload.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sim card download icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/simCardDownload.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSimCardDownloadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'simCardDownloadIcon', url: URL_SIMCARDDOWNLOAD }, ...properties);
}

/**
 * Creates a sim card download icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const simCardDownloadIcon = (...properties) => {
    const element = document.createElement('div');
    initSimCardDownloadIcon(element, ...properties);
    return element;
}
