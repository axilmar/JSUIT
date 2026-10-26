import { initIcon } from "./icon.js";

//the url of the select all svg; resolved relative to this module
const URL_SELECTALL = new URL('../../assets/icons/selectAll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a select all icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/selectAll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSelectAllIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SELECTALL }, ...properties);
}

/**
 * Creates a select all icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const selectAllIcon = (...properties) => {
    const element = document.createElement('div');
    initSelectAllIcon(element, ...properties);
    return element;
}
