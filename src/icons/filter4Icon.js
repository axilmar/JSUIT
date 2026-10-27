import { initIcon } from "./icon.js";

//the url of the filter4 svg; resolved relative to this module
const URL_FILTER4 = new URL('../../assets/icons/filter4.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter4 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter4.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter4Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter4Icon', url: URL_FILTER4 }, ...properties);
}

/**
 * Creates a filter4 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter4Icon = (...properties) => {
    const element = document.createElement('div');
    initFilter4Icon(element, ...properties);
    return element;
}
