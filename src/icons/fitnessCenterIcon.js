import { initIcon } from "./icon.js";

//the url of the fitness center svg; resolved relative to this module
const URL_FITNESSCENTER = new URL('../../assets/icons/fitnessCenter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fitness center icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fitnessCenter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFitnessCenterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FITNESSCENTER }, ...properties);
}

/**
 * Creates a fitness center icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fitnessCenterIcon = (...properties) => {
    const element = document.createElement('div');
    initFitnessCenterIcon(element, ...properties);
    return element;
}
