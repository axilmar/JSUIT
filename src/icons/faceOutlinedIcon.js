import { initIcon } from "./icon.js";

//the url of the face outlined svg; resolved relative to this module
const URL_FACEOUTLINED = new URL('../../assets/icons/faceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/faceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFaceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FACEOUTLINED }, ...properties);
}

/**
 * Creates a face outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const faceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFaceOutlinedIcon(element, ...properties);
    return element;
}
