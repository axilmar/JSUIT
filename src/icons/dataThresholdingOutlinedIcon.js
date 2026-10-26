import { initIcon } from "./icon.js";

//the url of the data thresholding outlined svg; resolved relative to this module
const URL_DATATHRESHOLDINGOUTLINED = new URL('../../assets/icons/dataThresholdingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data thresholding outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataThresholdingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataThresholdingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATATHRESHOLDINGOUTLINED }, ...properties);
}

/**
 * Creates a data thresholding outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataThresholdingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDataThresholdingOutlinedIcon(element, ...properties);
    return element;
}
