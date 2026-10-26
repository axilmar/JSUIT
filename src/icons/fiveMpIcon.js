import { initIcon } from "./icon.js";

//the url of the five mp svg; resolved relative to this module
const URL_FIVEMP = new URL('../../assets/icons/fiveMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a five mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiveMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiveMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIVEMP }, ...properties);
}

/**
 * Creates a five mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiveMpIcon = (...properties) => {
    const element = document.createElement('div');
    initFiveMpIcon(element, ...properties);
    return element;
}
