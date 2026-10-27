import { initIcon } from "./icon.js";

//the url of the face retouching off svg; resolved relative to this module
const URL_FACERETOUCHINGOFF = new URL('../../assets/icons/faceRetouchingOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face retouching off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/faceRetouchingOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFaceRetouchingOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'faceRetouchingOffIcon', url: URL_FACERETOUCHINGOFF }, ...properties);
}

/**
 * Creates a face retouching off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const faceRetouchingOffIcon = (...properties) => {
    const element = document.createElement('div');
    initFaceRetouchingOffIcon(element, ...properties);
    return element;
}
