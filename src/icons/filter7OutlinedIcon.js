import { initIcon } from "./icon.js";

//the url of the filter7 outlined svg; resolved relative to this module
const URL_FILTER7OUTLINED = new URL('../../assets/icons/filter7Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter7 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter7Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter7OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter7OutlinedIcon', url: URL_FILTER7OUTLINED }, ...properties);
}

/**
 * Creates a filter7 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter7OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilter7OutlinedIcon(element, ...properties);
    return element;
}
