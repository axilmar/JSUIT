import { initIcon } from "./icon.js";

//the url of the face3 outlined svg; resolved relative to this module
const URL_FACE3OUTLINED = new URL('../../assets/icons/face3Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face3 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face3Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace3OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FACE3OUTLINED }, ...properties);
}

/**
 * Creates a face3 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face3OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFace3OutlinedIcon(element, ...properties);
    return element;
}
