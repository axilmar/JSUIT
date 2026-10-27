import { initIcon } from "./icon.js";

//the url of the face2 outlined svg; resolved relative to this module
const URL_FACE2OUTLINED = new URL('../../assets/icons/face2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'face2OutlinedIcon', url: URL_FACE2OUTLINED }, ...properties);
}

/**
 * Creates a face2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFace2OutlinedIcon(element, ...properties);
    return element;
}
