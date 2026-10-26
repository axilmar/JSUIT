import { initIcon } from "./icon.js";

//the url of the face3 svg; resolved relative to this module
const URL_FACE3 = new URL('../../assets/icons/face3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FACE3 }, ...properties);
}

/**
 * Creates a face3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face3Icon = (...properties) => {
    const element = document.createElement('div');
    initFace3Icon(element, ...properties);
    return element;
}
