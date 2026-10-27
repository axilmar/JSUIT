import { initIcon } from "./icon.js";

//the url of the tune svg; resolved relative to this module
const URL_TUNE = new URL('../../assets/icons/tune.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tune icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tune.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTuneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tuneIcon', url: URL_TUNE }, ...properties);
}

/**
 * Creates a tune icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tuneIcon = (...properties) => {
    const element = document.createElement('div');
    initTuneIcon(element, ...properties);
    return element;
}
