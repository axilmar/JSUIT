import { initIcon } from "./icon.js";

//the url of the hdr strong outlined svg; resolved relative to this module
const URL_HDRSTRONGOUTLINED = new URL('../../assets/icons/hdrStrongOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr strong outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrStrongOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrStrongOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrStrongOutlinedIcon', url: URL_HDRSTRONGOUTLINED }, ...properties);
}

/**
 * Creates a hdr strong outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrStrongOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrStrongOutlinedIcon(element, ...properties);
    return element;
}
