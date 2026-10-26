import { initIcon } from "./icon.js";

//the url of the browse gallery outlined svg; resolved relative to this module
const URL_BROWSEGALLERYOUTLINED = new URL('../../assets/icons/browseGalleryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a browse gallery outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/browseGalleryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrowseGalleryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BROWSEGALLERYOUTLINED }, ...properties);
}

/**
 * Creates a browse gallery outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const browseGalleryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrowseGalleryOutlinedIcon(element, ...properties);
    return element;
}
