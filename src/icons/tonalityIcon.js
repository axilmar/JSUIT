import { initIcon } from "./icon.js";

//the url of the tonality svg; resolved relative to this module
const URL_TONALITY = new URL('../../assets/icons/tonality.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tonality icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tonality.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTonalityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TONALITY }, ...properties);
}

/**
 * Creates a tonality icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tonalityIcon = (...properties) => {
    const element = document.createElement('div');
    initTonalityIcon(element, ...properties);
    return element;
}
