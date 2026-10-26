import { initIcon } from "./icon.js";

//the url of the search outlined svg; resolved relative to this module
const URL_SEARCHOUTLINED = new URL('../../assets/icons/searchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a search outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/searchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSearchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SEARCHOUTLINED }, ...properties);
}

/**
 * Creates a search outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const searchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSearchOutlinedIcon(element, ...properties);
    return element;
}
