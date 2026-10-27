import { initIcon } from "./icon.js";

//the url of the precision manufacturing outlined svg; resolved relative to this module
const URL_PRECISIONMANUFACTURINGOUTLINED = new URL('../../assets/icons/precisionManufacturingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a precision manufacturing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/precisionManufacturingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPrecisionManufacturingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'precisionManufacturingOutlinedIcon', url: URL_PRECISIONMANUFACTURINGOUTLINED }, ...properties);
}

/**
 * Creates a precision manufacturing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const precisionManufacturingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPrecisionManufacturingOutlinedIcon(element, ...properties);
    return element;
}
