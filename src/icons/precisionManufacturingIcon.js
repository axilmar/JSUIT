import { initIcon } from "./icon.js";

//the url of the precision manufacturing svg; resolved relative to this module
const URL_PRECISIONMANUFACTURING = new URL('../../assets/icons/precisionManufacturing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a precision manufacturing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/precisionManufacturing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPrecisionManufacturingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'precisionManufacturingIcon', url: URL_PRECISIONMANUFACTURING }, ...properties);
}

/**
 * Creates a precision manufacturing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const precisionManufacturingIcon = (...properties) => {
    const element = document.createElement('div');
    initPrecisionManufacturingIcon(element, ...properties);
    return element;
}
