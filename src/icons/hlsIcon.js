import { initIcon } from "./icon.js";

//the url of the hls svg; resolved relative to this module
const URL_HLS = new URL('../../assets/icons/hls.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hls icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hls.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHlsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HLS }, ...properties);
}

/**
 * Creates a hls icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hlsIcon = (...properties) => {
    const element = document.createElement('div');
    initHlsIcon(element, ...properties);
    return element;
}
