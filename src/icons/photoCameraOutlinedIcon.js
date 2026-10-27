import { initIcon } from "./icon.js";

//the url of the photo camera outlined svg; resolved relative to this module
const URL_PHOTOCAMERAOUTLINED = new URL('../../assets/icons/photoCameraOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo camera outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoCameraOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoCameraOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'photoCameraOutlinedIcon', url: URL_PHOTOCAMERAOUTLINED }, ...properties);
}

/**
 * Creates a photo camera outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoCameraOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoCameraOutlinedIcon(element, ...properties);
    return element;
}
