import { initIcon } from "./icon.js";

//the url of the eight k svg; resolved relative to this module
const URL_EIGHTK = new URL('../../assets/icons/eightK.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eight k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eightK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEightKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EIGHTK }, ...properties);
}

/**
 * Creates an eight k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eightKIcon = (...properties) => {
    const element = document.createElement('div');
    initEightKIcon(element, ...properties);
    return element;
}
