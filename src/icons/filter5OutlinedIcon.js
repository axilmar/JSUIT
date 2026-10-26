import { initIcon } from "./icon.js";

//the url of the filter5 outlined svg; resolved relative to this module
const URL_FILTER5OUTLINED = new URL('../../assets/icons/filter5Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter5 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter5Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter5OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTER5OUTLINED }, ...properties);
}

/**
 * Creates a filter5 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter5OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilter5OutlinedIcon(element, ...properties);
    return element;
}
