import { initIcon } from "./icon.js";

//the url of the hdr weak outlined svg; resolved relative to this module
const URL_HDRWEAKOUTLINED = new URL('../../assets/icons/hdrWeakOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr weak outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrWeakOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrWeakOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDRWEAKOUTLINED }, ...properties);
}

/**
 * Creates a hdr weak outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrWeakOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrWeakOutlinedIcon(element, ...properties);
    return element;
}
