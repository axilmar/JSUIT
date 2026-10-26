import { initIcon } from "./icon.js";

//the url of the photo filter svg; resolved relative to this module
const URL_PHOTOFILTER = new URL('../../assets/icons/photoFilter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo filter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoFilter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoFilterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHOTOFILTER }, ...properties);
}

/**
 * Creates a photo filter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoFilterIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoFilterIcon(element, ...properties);
    return element;
}
