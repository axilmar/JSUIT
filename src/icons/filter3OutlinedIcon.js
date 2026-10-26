import { initIcon } from "./icon.js";

//the url of the filter3 outlined svg; resolved relative to this module
const URL_FILTER3OUTLINED = new URL('../../assets/icons/filter3Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter3 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter3Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter3OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTER3OUTLINED }, ...properties);
}

/**
 * Creates a filter3 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter3OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilter3OutlinedIcon(element, ...properties);
    return element;
}
