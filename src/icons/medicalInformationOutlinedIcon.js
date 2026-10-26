import { initIcon } from "./icon.js";

//the url of the medical information outlined svg; resolved relative to this module
const URL_MEDICALINFORMATIONOUTLINED = new URL('../../assets/icons/medicalInformationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a medical information outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/medicalInformationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMedicalInformationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MEDICALINFORMATIONOUTLINED }, ...properties);
}

/**
 * Creates a medical information outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const medicalInformationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMedicalInformationOutlinedIcon(element, ...properties);
    return element;
}
