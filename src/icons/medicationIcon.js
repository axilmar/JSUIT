import { initIcon } from "./icon.js";

//the url of the medication svg; resolved relative to this module
const URL_MEDICATION = new URL('../../assets/icons/medication.svg', import.meta.url).href;

/**
 * Initializes an icon element as a medication icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/medication.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMedicationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'medicationIcon', url: URL_MEDICATION }, ...properties);
}

/**
 * Creates a medication icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const medicationIcon = (...properties) => {
    const element = document.createElement('div');
    initMedicationIcon(element, ...properties);
    return element;
}
