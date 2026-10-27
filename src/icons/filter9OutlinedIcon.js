import { initIcon } from "./icon.js";

//the url of the filter9 outlined svg; resolved relative to this module
const URL_FILTER9OUTLINED = new URL('../../assets/icons/filter9Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter9 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter9Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter9OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter9OutlinedIcon', url: URL_FILTER9OUTLINED }, ...properties);
}

/**
 * Creates a filter9 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter9OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilter9OutlinedIcon(element, ...properties);
    return element;
}
