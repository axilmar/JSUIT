import { initIcon } from "./icon.js";

//the url of the masks svg; resolved relative to this module
const URL_MASKS = new URL('../../assets/icons/masks.svg', import.meta.url).href;

/**
 * Initializes an icon element as a masks icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/masks.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMasksIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'masksIcon', url: URL_MASKS }, ...properties);
}

/**
 * Creates a masks icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const masksIcon = (...properties) => {
    const element = document.createElement('div');
    initMasksIcon(element, ...properties);
    return element;
}
