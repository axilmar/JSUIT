import { initIcon } from "./icon.js";

//the url of the close outlined svg; resolved relative to this module
const URL_CLOSEOUTLINED = new URL('../../assets/icons/closeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a close outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'closeOutlinedIcon', url: URL_CLOSEOUTLINED }, ...properties);
}

/**
 * Creates a close outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloseOutlinedIcon(element, ...properties);
    return element;
}
