import { initIcon } from "./icon.js";

//the url of the face5 outlined svg; resolved relative to this module
const URL_FACE5OUTLINED = new URL('../../assets/icons/face5Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face5 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face5Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace5OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FACE5OUTLINED }, ...properties);
}

/**
 * Creates a face5 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face5OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFace5OutlinedIcon(element, ...properties);
    return element;
}
