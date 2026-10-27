import { initIcon } from "./icon.js";

//the url of the face retouching off outlined svg; resolved relative to this module
const URL_FACERETOUCHINGOFFOUTLINED = new URL('../../assets/icons/faceRetouchingOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face retouching off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/faceRetouchingOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFaceRetouchingOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'faceRetouchingOffOutlinedIcon', url: URL_FACERETOUCHINGOFFOUTLINED }, ...properties);
}

/**
 * Creates a face retouching off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const faceRetouchingOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFaceRetouchingOffOutlinedIcon(element, ...properties);
    return element;
}
