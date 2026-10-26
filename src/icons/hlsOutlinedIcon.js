import { initIcon } from "./icon.js";

//the url of the hls outlined svg; resolved relative to this module
const URL_HLSOUTLINED = new URL('../../assets/icons/hlsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hls outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hlsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHlsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HLSOUTLINED }, ...properties);
}

/**
 * Creates a hls outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hlsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHlsOutlinedIcon(element, ...properties);
    return element;
}
