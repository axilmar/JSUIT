import { initIcon } from "./icon.js";

//the url of the hdr off svg; resolved relative to this module
const URL_HDROFF = new URL('../../assets/icons/hdrOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDROFF }, ...properties);
}

/**
 * Creates a hdr off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrOffIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrOffIcon(element, ...properties);
    return element;
}
