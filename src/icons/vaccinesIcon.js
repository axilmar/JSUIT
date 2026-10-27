import { initIcon } from "./icon.js";

//the url of the vaccines svg; resolved relative to this module
const URL_VACCINES = new URL('../../assets/icons/vaccines.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vaccines icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vaccines.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVaccinesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'vaccinesIcon', url: URL_VACCINES }, ...properties);
}

/**
 * Creates a vaccines icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vaccinesIcon = (...properties) => {
    const element = document.createElement('div');
    initVaccinesIcon(element, ...properties);
    return element;
}
