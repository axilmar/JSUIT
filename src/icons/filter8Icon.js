import { initIcon } from "./icon.js";

//the url of the filter8 svg; resolved relative to this module
const URL_FILTER8 = new URL('../../assets/icons/filter8.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter8 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter8.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter8Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTER8 }, ...properties);
}

/**
 * Creates a filter8 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter8Icon = (...properties) => {
    const element = document.createElement('div');
    initFilter8Icon(element, ...properties);
    return element;
}
