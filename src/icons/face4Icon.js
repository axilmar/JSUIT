import { initIcon } from "./icon.js";

//the url of the face4 svg; resolved relative to this module
const URL_FACE4 = new URL('../../assets/icons/face4.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face4 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face4.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace4Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FACE4 }, ...properties);
}

/**
 * Creates a face4 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face4Icon = (...properties) => {
    const element = document.createElement('div');
    initFace4Icon(element, ...properties);
    return element;
}
