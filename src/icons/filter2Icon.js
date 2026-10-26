import { initIcon } from "./icon.js";

//the url of the filter2 svg; resolved relative to this module
const URL_FILTER2 = new URL('../../assets/icons/filter2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTER2 }, ...properties);
}

/**
 * Creates a filter2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter2Icon = (...properties) => {
    const element = document.createElement('div');
    initFilter2Icon(element, ...properties);
    return element;
}
