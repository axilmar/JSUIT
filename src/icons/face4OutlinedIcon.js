import { initIcon } from "./icon.js";

//the url of the face4 outlined svg; resolved relative to this module
const URL_FACE4OUTLINED = new URL('../../assets/icons/face4Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face4 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face4Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace4OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'face4OutlinedIcon', url: URL_FACE4OUTLINED }, ...properties);
}

/**
 * Creates a face4 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face4OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFace4OutlinedIcon(element, ...properties);
    return element;
}
