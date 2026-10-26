import { initIcon } from "./icon.js";

//the url of the data thresholding svg; resolved relative to this module
const URL_DATATHRESHOLDING = new URL('../../assets/icons/dataThresholding.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data thresholding icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataThresholding.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataThresholdingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATATHRESHOLDING }, ...properties);
}

/**
 * Creates a data thresholding icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataThresholdingIcon = (...properties) => {
    const element = document.createElement('div');
    initDataThresholdingIcon(element, ...properties);
    return element;
}
