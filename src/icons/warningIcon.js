import { initIcon } from "./icon.js";

//the url of the warning svg; resolved relative to this module
const URL_WARNING = new URL('../../assets/icons/warning.svg', import.meta.url).href;

/**
 * Initializes an icon element as a warning icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/warning.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWarningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'warningIcon', url: URL_WARNING }, ...properties);
}

/**
 * Creates a warning icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const warningIcon = (...properties) => {
    const element = document.createElement('div');
    initWarningIcon(element, ...properties);
    return element;
}
