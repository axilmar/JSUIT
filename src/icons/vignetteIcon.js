import { initIcon } from "./icon.js";

//the url of the vignette svg; resolved relative to this module
const URL_VIGNETTE = new URL('../../assets/icons/vignette.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vignette icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vignette.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVignetteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'vignetteIcon', url: URL_VIGNETTE }, ...properties);
}

/**
 * Creates a vignette icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vignetteIcon = (...properties) => {
    const element = document.createElement('div');
    initVignetteIcon(element, ...properties);
    return element;
}
