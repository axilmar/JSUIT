import { initIcon } from "./icon.js";

//the url of the medication liquid outlined svg; resolved relative to this module
const URL_MEDICATIONLIQUIDOUTLINED = new URL('../../assets/icons/medicationLiquidOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a medication liquid outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/medicationLiquidOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMedicationLiquidOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MEDICATIONLIQUIDOUTLINED }, ...properties);
}

/**
 * Creates a medication liquid outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const medicationLiquidOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMedicationLiquidOutlinedIcon(element, ...properties);
    return element;
}
