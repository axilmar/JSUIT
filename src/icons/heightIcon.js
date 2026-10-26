import { initIcon } from "./icon.js";

//the url of the height svg; resolved relative to this module
const URL_HEIGHT = new URL('../../assets/icons/height.svg', import.meta.url).href;

/**
 * Initializes an icon element as a height icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/height.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEIGHT }, ...properties);
}

/**
 * Creates a height icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const heightIcon = (...properties) => {
    const element = document.createElement('div');
    initHeightIcon(element, ...properties);
    return element;
}
