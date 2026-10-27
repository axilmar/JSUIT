import { initIcon } from "./icon.js";

//the url of the pinch svg; resolved relative to this module
const URL_PINCH = new URL('../../assets/icons/pinch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pinch icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pinch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPinchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pinchIcon', url: URL_PINCH }, ...properties);
}

/**
 * Creates a pinch icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pinchIcon = (...properties) => {
    const element = document.createElement('div');
    initPinchIcon(element, ...properties);
    return element;
}
