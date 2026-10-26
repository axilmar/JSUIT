import { initIcon } from "./icon.js";

//the url of the medical services svg; resolved relative to this module
const URL_MEDICALSERVICES = new URL('../../assets/icons/medicalServices.svg', import.meta.url).href;

/**
 * Initializes an icon element as a medical services icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/medicalServices.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMedicalServicesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MEDICALSERVICES }, ...properties);
}

/**
 * Creates a medical services icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const medicalServicesIcon = (...properties) => {
    const element = document.createElement('div');
    initMedicalServicesIcon(element, ...properties);
    return element;
}
