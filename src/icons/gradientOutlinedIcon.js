import { initIcon } from "./icon.js";

//the url of the gradient outlined svg; resolved relative to this module
const URL_GRADIENTOUTLINED = new URL('../../assets/icons/gradientOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gradient outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gradientOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGradientOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRADIENTOUTLINED }, ...properties);
}

/**
 * Creates a gradient outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gradientOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGradientOutlinedIcon(element, ...properties);
    return element;
}
