import { initIcon } from "./icon.js";

//the url of the filter1 outlined svg; resolved relative to this module
const URL_FILTER1OUTLINED = new URL('../../assets/icons/filter1Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter1 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter1Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter1OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTER1OUTLINED }, ...properties);
}

/**
 * Creates a filter1 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter1OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilter1OutlinedIcon(element, ...properties);
    return element;
}
