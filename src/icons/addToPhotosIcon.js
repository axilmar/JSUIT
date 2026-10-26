import { initIcon } from "./icon.js";

//the url of the add to photos svg; resolved relative to this module
const URL_ADDTOPHOTOS = new URL('../../assets/icons/addToPhotos.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add to photos icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addToPhotos.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddToPhotosIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDTOPHOTOS }, ...properties);
}

/**
 * Creates an add to photos icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addToPhotosIcon = (...properties) => {
    const element = document.createElement('div');
    initAddToPhotosIcon(element, ...properties);
    return element;
}
