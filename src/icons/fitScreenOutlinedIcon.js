import { initIcon } from "./icon.js";

//the url of the fit screen outlined svg; resolved relative to this module
const URL_FITSCREENOUTLINED = new URL('../../assets/icons/fitScreenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fit screen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fitScreenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFitScreenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FITSCREENOUTLINED }, ...properties);
}

/**
 * Creates a fit screen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fitScreenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFitScreenOutlinedIcon(element, ...properties);
    return element;
}
