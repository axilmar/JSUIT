import { initIcon } from "./icon.js";

//the url of the hdr auto svg; resolved relative to this module
const URL_HDRAUTO = new URL('../../assets/icons/hdrAuto.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr auto icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrAuto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrAutoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrAutoIcon', url: URL_HDRAUTO }, ...properties);
}

/**
 * Creates a hdr auto icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrAutoIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrAutoIcon(element, ...properties);
    return element;
}
