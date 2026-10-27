import { initIcon } from "./icon.js";

//the url of the crop svg; resolved relative to this module
const URL_CROP = new URL('../../assets/icons/crop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cropIcon', url: URL_CROP }, ...properties);
}

/**
 * Creates a crop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropIcon = (...properties) => {
    const element = document.createElement('div');
    initCropIcon(element, ...properties);
    return element;
}
