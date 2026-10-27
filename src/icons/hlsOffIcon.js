import { initIcon } from "./icon.js";

//the url of the hls off svg; resolved relative to this module
const URL_HLSOFF = new URL('../../assets/icons/hlsOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hls off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hlsOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHlsOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hlsOffIcon', url: URL_HLSOFF }, ...properties);
}

/**
 * Creates a hls off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hlsOffIcon = (...properties) => {
    const element = document.createElement('div');
    initHlsOffIcon(element, ...properties);
    return element;
}
