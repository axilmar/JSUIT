import { initIcon } from "./icon.js";

//the url of the expand less outlined svg; resolved relative to this module
const URL_EXPANDLESSOUTLINED = new URL('../../assets/icons/expandLessOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an expand less outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/expandLessOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandLessOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPANDLESSOUTLINED }, ...properties);
}

/**
 * Creates an expand less outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandLessOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExpandLessOutlinedIcon(element, ...properties);
    return element;
}
