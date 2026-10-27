import { initIcon } from "./icon.js";

//the url of the single bed outlined svg; resolved relative to this module
const URL_SINGLEBEDOUTLINED = new URL('../../assets/icons/singleBedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a single bed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/singleBedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSingleBedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'singleBedOutlinedIcon', url: URL_SINGLEBEDOUTLINED }, ...properties);
}

/**
 * Creates a single bed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const singleBedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSingleBedOutlinedIcon(element, ...properties);
    return element;
}
