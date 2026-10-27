import { initIcon } from "./icon.js";

//the url of the download for offline svg; resolved relative to this module
const URL_DOWNLOADFOROFFLINE = new URL('../../assets/icons/downloadForOffline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a download for offline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downloadForOffline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownloadForOfflineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'downloadForOfflineIcon', url: URL_DOWNLOADFOROFFLINE }, ...properties);
}

/**
 * Creates a download for offline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downloadForOfflineIcon = (...properties) => {
    const element = document.createElement('div');
    initDownloadForOfflineIcon(element, ...properties);
    return element;
}
