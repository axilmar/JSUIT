import { initIcon } from "./icon.js";

//the url of the face retouching natural svg; resolved relative to this module
const URL_FACERETOUCHINGNATURAL = new URL('../../assets/icons/faceRetouchingNatural.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face retouching natural icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/faceRetouchingNatural.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFaceRetouchingNaturalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'faceRetouchingNaturalIcon', url: URL_FACERETOUCHINGNATURAL }, ...properties);
}

/**
 * Creates a face retouching natural icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const faceRetouchingNaturalIcon = (...properties) => {
    const element = document.createElement('div');
    initFaceRetouchingNaturalIcon(element, ...properties);
    return element;
}
