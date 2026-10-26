import { initIcon } from "./icon.js";

//the url of the download outlined svg; resolved relative to this module
const URL_DOWNLOADOUTLINED = new URL('../../assets/icons/downloadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a download outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downloadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownloadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOWNLOADOUTLINED }, ...properties);
}

/**
 * Creates a download outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downloadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDownloadOutlinedIcon(element, ...properties);
    return element;
}
