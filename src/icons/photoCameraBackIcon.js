import { initIcon } from "./icon.js";

//the url of the photo camera back svg; resolved relative to this module
const URL_PHOTOCAMERABACK = new URL('../../assets/icons/photoCameraBack.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo camera back icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoCameraBack.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoCameraBackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHOTOCAMERABACK }, ...properties);
}

/**
 * Creates a photo camera back icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoCameraBackIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoCameraBackIcon(element, ...properties);
    return element;
}
