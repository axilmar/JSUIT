import { initIcon } from "./icon.js";

//the url of the filter2 outlined svg; resolved relative to this module
const URL_FILTER2OUTLINED = new URL('../../assets/icons/filter2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter2OutlinedIcon', url: URL_FILTER2OUTLINED }, ...properties);
}

/**
 * Creates a filter2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilter2OutlinedIcon(element, ...properties);
    return element;
}
