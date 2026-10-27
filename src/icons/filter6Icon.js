import { initIcon } from "./icon.js";

//the url of the filter6 svg; resolved relative to this module
const URL_FILTER6 = new URL('../../assets/icons/filter6.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter6 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter6.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter6Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter6Icon', url: URL_FILTER6 }, ...properties);
}

/**
 * Creates a filter6 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter6Icon = (...properties) => {
    const element = document.createElement('div');
    initFilter6Icon(element, ...properties);
    return element;
}
