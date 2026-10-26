import { initIcon } from "./icon.js";

//the url of the hdr off outlined svg; resolved relative to this module
const URL_HDROFFOUTLINED = new URL('../../assets/icons/hdrOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDROFFOUTLINED }, ...properties);
}

/**
 * Creates a hdr off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrOffOutlinedIcon(element, ...properties);
    return element;
}
