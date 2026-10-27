import { initIcon } from "./icon.js";

//the url of the compress outlined svg; resolved relative to this module
const URL_COMPRESSOUTLINED = new URL('../../assets/icons/compressOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a compress outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/compressOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCompressOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'compressOutlinedIcon', url: URL_COMPRESSOUTLINED }, ...properties);
}

/**
 * Creates a compress outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const compressOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCompressOutlinedIcon(element, ...properties);
    return element;
}
