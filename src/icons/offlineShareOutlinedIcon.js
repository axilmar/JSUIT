import { initIcon } from "./icon.js";

//the url of the offline share outlined svg; resolved relative to this module
const URL_OFFLINESHAREOUTLINED = new URL('../../assets/icons/offlineShareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an offline share outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/offlineShareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOfflineShareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OFFLINESHAREOUTLINED }, ...properties);
}

/**
 * Creates an offline share outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const offlineShareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOfflineShareOutlinedIcon(element, ...properties);
    return element;
}
