import { initIcon } from "./icon.js";

//the url of the filter8 outlined svg; resolved relative to this module
const URL_FILTER8OUTLINED = new URL('../../assets/icons/filter8Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter8 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter8Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter8OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filter8OutlinedIcon', url: URL_FILTER8OUTLINED }, ...properties);
}

/**
 * Creates a filter8 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter8OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilter8OutlinedIcon(element, ...properties);
    return element;
}
