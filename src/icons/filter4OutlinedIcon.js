import { initIcon } from "./icon.js";

//the url of the filter4 outlined svg; resolved relative to this module
const URL_FILTER4OUTLINED = new URL('../../assets/icons/filter4Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter4 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter4Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter4OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter4OutlinedIcon', url: URL_FILTER4OUTLINED }, ...properties);
}

/**
 * Creates a filter4 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter4OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilter4OutlinedIcon(element, ...properties);
    return element;
}
