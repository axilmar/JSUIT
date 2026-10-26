import { initIcon } from "./icon.js";

//the url of the hdr plus svg; resolved relative to this module
const URL_HDRPLUS = new URL('../../assets/icons/hdrPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDRPLUS }, ...properties);
}

/**
 * Creates a hdr plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrPlusIcon(element, ...properties);
    return element;
}
