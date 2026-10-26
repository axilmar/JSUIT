import { initIcon } from "./icon.js";

//the url of the add to photos outlined svg; resolved relative to this module
const URL_ADDTOPHOTOSOUTLINED = new URL('../../assets/icons/addToPhotosOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add to photos outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addToPhotosOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddToPhotosOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDTOPHOTOSOUTLINED }, ...properties);
}

/**
 * Creates an add to photos outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addToPhotosOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddToPhotosOutlinedIcon(element, ...properties);
    return element;
}
