import { initIcon } from "./icon.js";

//the url of the filter7 svg; resolved relative to this module
const URL_FILTER7 = new URL('../../assets/icons/filter7.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter7 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter7.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter7Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter7Icon', url: URL_FILTER7 }, ...properties);
}

/**
 * Creates a filter7 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter7Icon = (...properties) => {
    const element = document.createElement('div');
    initFilter7Icon(element, ...properties);
    return element;
}
