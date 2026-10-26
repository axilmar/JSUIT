import { initIcon } from "./icon.js";

//the url of the yard svg; resolved relative to this module
const URL_YARD = new URL('../../assets/icons/yard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a yard icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/yard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initYardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_YARD }, ...properties);
}

/**
 * Creates a yard icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const yardIcon = (...properties) => {
    const element = document.createElement('div');
    initYardIcon(element, ...properties);
    return element;
}
