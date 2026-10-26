import { initIcon } from "./icon.js";

//the url of the download done outlined svg; resolved relative to this module
const URL_DOWNLOADDONEOUTLINED = new URL('../../assets/icons/downloadDoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a download done outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downloadDoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownloadDoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOWNLOADDONEOUTLINED }, ...properties);
}

/**
 * Creates a download done outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downloadDoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDownloadDoneOutlinedIcon(element, ...properties);
    return element;
}
