import { initIcon } from "./icon.js";

//the url of the hdr auto select outlined svg; resolved relative to this module
const URL_HDRAUTOSELECTOUTLINED = new URL('../../assets/icons/hdrAutoSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr auto select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrAutoSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrAutoSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDRAUTOSELECTOUTLINED }, ...properties);
}

/**
 * Creates a hdr auto select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrAutoSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrAutoSelectOutlinedIcon(element, ...properties);
    return element;
}
