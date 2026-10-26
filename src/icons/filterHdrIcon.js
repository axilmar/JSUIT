import { initIcon } from "./icon.js";

//the url of the filter hdr svg; resolved relative to this module
const URL_FILTERHDR = new URL('../../assets/icons/filterHdr.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter hdr icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterHdr.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterHdrIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERHDR }, ...properties);
}

/**
 * Creates a filter hdr icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterHdrIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterHdrIcon(element, ...properties);
    return element;
}
