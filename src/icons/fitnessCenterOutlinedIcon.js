import { initIcon } from "./icon.js";

//the url of the fitness center outlined svg; resolved relative to this module
const URL_FITNESSCENTEROUTLINED = new URL('../../assets/icons/fitnessCenterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fitness center outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fitnessCenterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFitnessCenterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FITNESSCENTEROUTLINED }, ...properties);
}

/**
 * Creates a fitness center outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fitnessCenterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFitnessCenterOutlinedIcon(element, ...properties);
    return element;
}
