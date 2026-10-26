import { initIcon } from "./icon.js";

//the url of the hls off outlined svg; resolved relative to this module
const URL_HLSOFFOUTLINED = new URL('../../assets/icons/hlsOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hls off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hlsOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHlsOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HLSOFFOUTLINED }, ...properties);
}

/**
 * Creates a hls off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hlsOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHlsOffOutlinedIcon(element, ...properties);
    return element;
}
