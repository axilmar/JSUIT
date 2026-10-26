import { initIcon } from "./icon.js";

//the url of the download for offline outlined svg; resolved relative to this module
const URL_DOWNLOADFOROFFLINEOUTLINED = new URL('../../assets/icons/downloadForOfflineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a download for offline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downloadForOfflineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownloadForOfflineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOWNLOADFOROFFLINEOUTLINED }, ...properties);
}

/**
 * Creates a download for offline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downloadForOfflineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDownloadForOfflineOutlinedIcon(element, ...properties);
    return element;
}
