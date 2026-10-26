import { initIcon } from "./icon.js";

//the url of the contrast svg; resolved relative to this module
const URL_CONTRAST = new URL('../../assets/icons/contrast.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contrast icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contrast.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContrastIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTRAST }, ...properties);
}

/**
 * Creates a contrast icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contrastIcon = (...properties) => {
    const element = document.createElement('div');
    initContrastIcon(element, ...properties);
    return element;
}
