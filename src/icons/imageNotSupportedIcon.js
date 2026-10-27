import { initIcon } from "./icon.js";

//the url of the image not supported svg; resolved relative to this module
const URL_IMAGENOTSUPPORTED = new URL('../../assets/icons/imageNotSupported.svg', import.meta.url).href;

/**
 * Initializes an icon element as an image not supported icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/imageNotSupported.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImageNotSupportedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'imageNotSupportedIcon', url: URL_IMAGENOTSUPPORTED }, ...properties);
}

/**
 * Creates an image not supported icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const imageNotSupportedIcon = (...properties) => {
    const element = document.createElement('div');
    initImageNotSupportedIcon(element, ...properties);
    return element;
}
