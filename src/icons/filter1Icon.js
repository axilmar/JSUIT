import { initIcon } from "./icon.js";

//the url of the filter1 svg; resolved relative to this module
const URL_FILTER1 = new URL('../../assets/icons/filter1.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter1 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter1.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter1Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter1Icon', url: URL_FILTER1 }, ...properties);
}

/**
 * Creates a filter1 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter1Icon = (...properties) => {
    const element = document.createElement('div');
    initFilter1Icon(element, ...properties);
    return element;
}
