import { initIcon } from "./icon.js";

//the url of the medical information svg; resolved relative to this module
const URL_MEDICALINFORMATION = new URL('../../assets/icons/medicalInformation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a medical information icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/medicalInformation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMedicalInformationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'medicalInformationIcon', url: URL_MEDICALINFORMATION }, ...properties);
}

/**
 * Creates a medical information icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const medicalInformationIcon = (...properties) => {
    const element = document.createElement('div');
    initMedicalInformationIcon(element, ...properties);
    return element;
}
