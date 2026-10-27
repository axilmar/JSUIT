import { initIcon } from "./icon.js";

//the url of the face svg; resolved relative to this module
const URL_FACE = new URL('../../assets/icons/face.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFaceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'faceIcon', url: URL_FACE }, ...properties);
}

/**
 * Creates a face icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const faceIcon = (...properties) => {
    const element = document.createElement('div');
    initFaceIcon(element, ...properties);
    return element;
}
