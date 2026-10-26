import { initIcon } from "./icon.js";

//the url of the image search svg; resolved relative to this module
const URL_IMAGESEARCH = new URL('../../assets/icons/imageSearch.svg', import.meta.url).href;

/**
 * Initializes an icon element as an image search icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/imageSearch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImageSearchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMAGESEARCH }, ...properties);
}

/**
 * Creates an image search icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const imageSearchIcon = (...properties) => {
    const element = document.createElement('div');
    initImageSearchIcon(element, ...properties);
    return element;
}
