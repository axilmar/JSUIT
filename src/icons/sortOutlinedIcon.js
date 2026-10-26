import { initIcon } from "./icon.js";

//the url of the sort outlined svg; resolved relative to this module
const URL_SORTOUTLINED = new URL('../../assets/icons/sortOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sort outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sortOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSortOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SORTOUTLINED }, ...properties);
}

/**
 * Creates a sort outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sortOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSortOutlinedIcon(element, ...properties);
    return element;
}
