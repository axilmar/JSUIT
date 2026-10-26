import { initIcon } from "./icon.js";

//the url of the more vert svg; resolved relative to this module
const URL_MOREVERT = new URL('../../assets/icons/moreVert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a more vert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moreVert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoreVertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOREVERT }, ...properties);
}

/**
 * Creates a more vert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moreVertIcon = (...properties) => {
    const element = document.createElement('div');
    initMoreVertIcon(element, ...properties);
    return element;
}
