import { initIcon } from "./icon.js";

//the url of the medical services outlined svg; resolved relative to this module
const URL_MEDICALSERVICESOUTLINED = new URL('../../assets/icons/medicalServicesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a medical services outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/medicalServicesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMedicalServicesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MEDICALSERVICESOUTLINED }, ...properties);
}

/**
 * Creates a medical services outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const medicalServicesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMedicalServicesOutlinedIcon(element, ...properties);
    return element;
}
