import { initIcon } from "./icon.js";

//the url of the downloading svg; resolved relative to this module
const URL_DOWNLOADING = new URL('../../assets/icons/downloading.svg', import.meta.url).href;

/**
 * Initializes an icon element as a downloading icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downloading.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownloadingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'downloadingIcon', url: URL_DOWNLOADING }, ...properties);
}

/**
 * Creates a downloading icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downloadingIcon = (...properties) => {
    const element = document.createElement('div');
    initDownloadingIcon(element, ...properties);
    return element;
}
