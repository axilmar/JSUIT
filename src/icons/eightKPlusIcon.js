import { initIcon } from "./icon.js";

//the url of the eight k plus svg; resolved relative to this module
const URL_EIGHTKPLUS = new URL('../../assets/icons/eightKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eight k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eightKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEightKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EIGHTKPLUS }, ...properties);
}

/**
 * Creates an eight k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eightKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initEightKPlusIcon(element, ...properties);
    return element;
}
