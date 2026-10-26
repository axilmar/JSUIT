import { initIcon } from "./icon.js";

//the url of the fit screen svg; resolved relative to this module
const URL_FITSCREEN = new URL('../../assets/icons/fitScreen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fit screen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fitScreen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFitScreenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FITSCREEN }, ...properties);
}

/**
 * Creates a fit screen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fitScreenIcon = (...properties) => {
    const element = document.createElement('div');
    initFitScreenIcon(element, ...properties);
    return element;
}
