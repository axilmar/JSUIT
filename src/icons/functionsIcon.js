import { initIcon } from "./icon.js";

//the url of the functions svg; resolved relative to this module
const URL_FUNCTIONS = new URL('../../assets/icons/functions.svg', import.meta.url).href;

/**
 * Initializes an icon element as a functions icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/functions.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFunctionsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'functionsIcon', url: URL_FUNCTIONS }, ...properties);
}

/**
 * Creates a functions icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const functionsIcon = (...properties) => {
    const element = document.createElement('div');
    initFunctionsIcon(element, ...properties);
    return element;
}
