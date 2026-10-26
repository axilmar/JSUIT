import { initIcon } from "./icon.js";

//the url of the filter9 svg; resolved relative to this module
const URL_FILTER9 = new URL('../../assets/icons/filter9.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter9 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter9.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter9Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTER9 }, ...properties);
}

/**
 * Creates a filter9 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter9Icon = (...properties) => {
    const element = document.createElement('div');
    initFilter9Icon(element, ...properties);
    return element;
}
