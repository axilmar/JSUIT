import { initIcon } from "./icon.js";

//the url of the browse gallery svg; resolved relative to this module
const URL_BROWSEGALLERY = new URL('../../assets/icons/browseGallery.svg', import.meta.url).href;

/**
 * Initializes an icon element as a browse gallery icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/browseGallery.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrowseGalleryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BROWSEGALLERY }, ...properties);
}

/**
 * Creates a browse gallery icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const browseGalleryIcon = (...properties) => {
    const element = document.createElement('div');
    initBrowseGalleryIcon(element, ...properties);
    return element;
}
