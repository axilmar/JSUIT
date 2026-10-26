import { initIcon } from "./icon.js";

//the url of the search off outlined svg; resolved relative to this module
const URL_SEARCHOFFOUTLINED = new URL('../../assets/icons/searchOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a search off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/searchOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSearchOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SEARCHOFFOUTLINED }, ...properties);
}

/**
 * Creates a search off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const searchOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSearchOffOutlinedIcon(element, ...properties);
    return element;
}
