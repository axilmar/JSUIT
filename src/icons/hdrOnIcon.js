import { initIcon } from "./icon.js";

//the url of the hdr on svg; resolved relative to this module
const URL_HDRON = new URL('../../assets/icons/hdrOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrOnIcon', url: URL_HDRON }, ...properties);
}

/**
 * Creates a hdr on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrOnIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrOnIcon(element, ...properties);
    return element;
}
