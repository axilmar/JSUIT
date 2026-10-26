import { initIcon } from "./icon.js";

//the url of the hdr on outlined svg; resolved relative to this module
const URL_HDRONOUTLINED = new URL('../../assets/icons/hdrOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDRONOUTLINED }, ...properties);
}

/**
 * Creates a hdr on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrOnOutlinedIcon(element, ...properties);
    return element;
}
