import { initIcon } from "./icon.js";

//the url of the image not supported outlined svg; resolved relative to this module
const URL_IMAGENOTSUPPORTEDOUTLINED = new URL('../../assets/icons/imageNotSupportedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an image not supported outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/imageNotSupportedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImageNotSupportedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMAGENOTSUPPORTEDOUTLINED }, ...properties);
}

/**
 * Creates an image not supported outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const imageNotSupportedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initImageNotSupportedOutlinedIcon(element, ...properties);
    return element;
}
