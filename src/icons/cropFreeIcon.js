import { initIcon } from "./icon.js";

//the url of the crop free svg; resolved relative to this module
const URL_CROPFREE = new URL('../../assets/icons/cropFree.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop free icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropFree.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropFreeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPFREE }, ...properties);
}

/**
 * Creates a crop free icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropFreeIcon = (...properties) => {
    const element = document.createElement('div');
    initCropFreeIcon(element, ...properties);
    return element;
}
