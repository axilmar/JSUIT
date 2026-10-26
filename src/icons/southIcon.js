import { initIcon } from "./icon.js";

//the url of the south svg; resolved relative to this module
const URL_SOUTH = new URL('../../assets/icons/south.svg', import.meta.url).href;

/**
 * Initializes an icon element as a south icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/south.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSouthIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOUTH }, ...properties);
}

/**
 * Creates a south icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const southIcon = (...properties) => {
    const element = document.createElement('div');
    initSouthIcon(element, ...properties);
    return element;
}
