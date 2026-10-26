import { initIcon } from "./icon.js";

//the url of the warning amber svg; resolved relative to this module
const URL_WARNINGAMBER = new URL('../../assets/icons/warningAmber.svg', import.meta.url).href;

/**
 * Initializes an icon element as a warning amber icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/warningAmber.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWarningAmberIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WARNINGAMBER }, ...properties);
}

/**
 * Creates a warning amber icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const warningAmberIcon = (...properties) => {
    const element = document.createElement('div');
    initWarningAmberIcon(element, ...properties);
    return element;
}
