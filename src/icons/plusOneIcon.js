import { initIcon } from "./icon.js";

//the url of the plus one svg; resolved relative to this module
const URL_PLUSONE = new URL('../../assets/icons/plusOne.svg', import.meta.url).href;

/**
 * Initializes an icon element as a plus one icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/plusOne.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlusOneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLUSONE }, ...properties);
}

/**
 * Creates a plus one icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const plusOneIcon = (...properties) => {
    const element = document.createElement('div');
    initPlusOneIcon(element, ...properties);
    return element;
}
