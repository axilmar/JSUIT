import { initIcon } from "./icon.js";

//the url of the clean hands svg; resolved relative to this module
const URL_CLEANHANDS = new URL('../../assets/icons/cleanHands.svg', import.meta.url).href;

/**
 * Initializes an icon element as a clean hands icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cleanHands.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCleanHandsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cleanHandsIcon', url: URL_CLEANHANDS }, ...properties);
}

/**
 * Creates a clean hands icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cleanHandsIcon = (...properties) => {
    const element = document.createElement('div');
    initCleanHandsIcon(element, ...properties);
    return element;
}
