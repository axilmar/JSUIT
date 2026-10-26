import { initIcon } from "./icon.js";

//the url of the hdr auto select svg; resolved relative to this module
const URL_HDRAUTOSELECT = new URL('../../assets/icons/hdrAutoSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr auto select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrAutoSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrAutoSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDRAUTOSELECT }, ...properties);
}

/**
 * Creates a hdr auto select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrAutoSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrAutoSelectIcon(element, ...properties);
    return element;
}
