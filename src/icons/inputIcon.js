import { initIcon } from "./icon.js";

//the url of the input svg; resolved relative to this module
const URL_INPUT = new URL('../../assets/icons/input.svg', import.meta.url).href;

/**
 * Initializes an icon element as an input icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/input.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInputIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'inputIcon', url: URL_INPUT }, ...properties);
}

/**
 * Creates an input icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const inputIcon = (...properties) => {
    const element = document.createElement('div');
    initInputIcon(element, ...properties);
    return element;
}
