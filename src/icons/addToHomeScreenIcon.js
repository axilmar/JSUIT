import { initIcon } from "./icon.js";

//the url of the add to home screen svg; resolved relative to this module
const URL_ADDTOHOMESCREEN = new URL('../../assets/icons/addToHomeScreen.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add to home screen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addToHomeScreen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddToHomeScreenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addToHomeScreenIcon', url: URL_ADDTOHOMESCREEN }, ...properties);
}

/**
 * Creates an add to home screen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addToHomeScreenIcon = (...properties) => {
    const element = document.createElement('div');
    initAddToHomeScreenIcon(element, ...properties);
    return element;
}
