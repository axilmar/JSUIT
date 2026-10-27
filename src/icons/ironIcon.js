import { initIcon } from "./icon.js";

//the url of the iron svg; resolved relative to this module
const URL_IRON = new URL('../../assets/icons/iron.svg', import.meta.url).href;

/**
 * Initializes an icon element as an iron icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/iron.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIronIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ironIcon', url: URL_IRON }, ...properties);
}

/**
 * Creates an iron icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ironIcon = (...properties) => {
    const element = document.createElement('div');
    initIronIcon(element, ...properties);
    return element;
}
