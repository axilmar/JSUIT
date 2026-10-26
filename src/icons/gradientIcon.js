import { initIcon } from "./icon.js";

//the url of the gradient svg; resolved relative to this module
const URL_GRADIENT = new URL('../../assets/icons/gradient.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gradient icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gradient.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGradientIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRADIENT }, ...properties);
}

/**
 * Creates a gradient icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gradientIcon = (...properties) => {
    const element = document.createElement('div');
    initGradientIcon(element, ...properties);
    return element;
}
