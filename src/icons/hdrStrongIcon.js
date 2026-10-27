import { initIcon } from "./icon.js";

//the url of the hdr strong svg; resolved relative to this module
const URL_HDRSTRONG = new URL('../../assets/icons/hdrStrong.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr strong icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrStrong.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrStrongIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrStrongIcon', url: URL_HDRSTRONG }, ...properties);
}

/**
 * Creates a hdr strong icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrStrongIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrStrongIcon(element, ...properties);
    return element;
}
