import { initIcon } from "./icon.js";

//the url of the medication liquid svg; resolved relative to this module
const URL_MEDICATIONLIQUID = new URL('../../assets/icons/medicationLiquid.svg', import.meta.url).href;

/**
 * Initializes an icon element as a medication liquid icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/medicationLiquid.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMedicationLiquidIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MEDICATIONLIQUID }, ...properties);
}

/**
 * Creates a medication liquid icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const medicationLiquidIcon = (...properties) => {
    const element = document.createElement('div');
    initMedicationLiquidIcon(element, ...properties);
    return element;
}
