import { initIcon } from "./icon.js";

//the url of the crop original svg; resolved relative to this module
const URL_CROPORIGINAL = new URL('../../assets/icons/cropOriginal.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop original icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropOriginal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropOriginalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cropOriginalIcon', url: URL_CROPORIGINAL }, ...properties);
}

/**
 * Creates a crop original icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropOriginalIcon = (...properties) => {
    const element = document.createElement('div');
    initCropOriginalIcon(element, ...properties);
    return element;
}
