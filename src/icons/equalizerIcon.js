import { initIcon } from "./icon.js";

//the url of the equalizer svg; resolved relative to this module
const URL_EQUALIZER = new URL('../../assets/icons/equalizer.svg', import.meta.url).href;

/**
 * Initializes an icon element as an equalizer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/equalizer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEqualizerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'equalizerIcon', url: URL_EQUALIZER }, ...properties);
}

/**
 * Creates an equalizer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const equalizerIcon = (...properties) => {
    const element = document.createElement('div');
    initEqualizerIcon(element, ...properties);
    return element;
}
