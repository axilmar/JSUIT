import { initIcon } from "./icon.js";

//the url of the photo camera back outlined svg; resolved relative to this module
const URL_PHOTOCAMERABACKOUTLINED = new URL('../../assets/icons/photoCameraBackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo camera back outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoCameraBackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoCameraBackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHOTOCAMERABACKOUTLINED }, ...properties);
}

/**
 * Creates a photo camera back outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoCameraBackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoCameraBackOutlinedIcon(element, ...properties);
    return element;
}
