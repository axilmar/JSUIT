import { initIcon } from "./icon.js";

//the url of the medication outlined svg; resolved relative to this module
const URL_MEDICATIONOUTLINED = new URL('../../assets/icons/medicationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a medication outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/medicationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMedicationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MEDICATIONOUTLINED }, ...properties);
}

/**
 * Creates a medication outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const medicationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMedicationOutlinedIcon(element, ...properties);
    return element;
}
